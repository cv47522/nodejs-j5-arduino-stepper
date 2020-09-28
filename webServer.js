const {Board, Led, Stepper} = require('johnny-five');
var led, board, stepper, speed = 180;

board = new Board();

board.on('ready', () => {
    // init a led on pin 13, blink every 1000ms
    led = new Led(13).blink(1000);

    // for diabling the EN pin on the DIY stepper shield
    // board.pinMode(8, board.MODES.OUTPUT);
    // board.digitalWrite(8, 0);

    stepper = new Stepper({
        type: Stepper.TYPE.DRIVER,
        stepsPerRev: 200,
        pins: {
          step: 12,
          dir: 11

        // for using the DIY stepper shield
        //   step: 6,
        //   dir: 7
        }
      });

});


// "Express" initializes "app" to be a function handler that you can supply to an HTTP server
const express = require('express');
const app = express();
const http = require('http').createServer(app);
// Initialize a new instance of socket.io by passing the http (the HTTP server) object.
const io = require('socket.io')(http);

const favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/img/favicon.png'));

// define a route handler "/" that gets called when we hit our website home
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

http.listen(3000, () => {
    console.log('listening on 3000....');
});

// WebSocket Connection
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // get light switch status from client
    socket.on('led', (data) => {
        console.log(data);
        if (board.isReady) {
            led.blink(data.delay);
        }
    });

    socket.on('stepper-speed', (data) => {
        console.log(data);
        // if (board.isReady) {
        //     stepper.speed(data.rpm);
        // }

        speed = data.rpm
    });

    socket.on('stepper-ccw', (data) => {
        console.log(data);
        if (board.isReady) {
            // Set stepper to 180 RPM, counter-clockwise with acceleration and deceleration
            stepper.rpm(speed).ccw().accel(1600).decel(1600);

            // Make 10 full revolutions
            stepper.step(2000, () => {
                console.log("Done moving CCW");
            });
        }
    });

    socket.on('stepper-cw', (data) => {
        console.log(data);
        if (board.isReady) {
            // Set stepper to 180 RPM, counter-clockwise with acceleration and deceleration
            stepper.rpm(speed).cw().accel(1600).decel(1600);

            // Make 10 full revolutions
            stepper.step(2000, () => {
                console.log("Done moving CW");
            });
        }
    });
});
