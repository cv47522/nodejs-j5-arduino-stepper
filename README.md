# Control Arduino Stepper via Serial Port

## Node Modules

- [johnny-five](http://johnny-five.io/)
- [express](https://expressjs.com/)
- [socket.io](https://socket.io/)
- [serve-favicon](https://github.com/expressjs/serve-favicon)

## Installation

1. Run the below commands in order

    ``` bash
    git clone https://github.com/cv47522/nodejs-j5-arduino-stepper.git

    cd path/to/repository

    npm i

    node webServer.js  # start the server
    ```

2. Type <http://localhost:3000> in a browser to go to the client-side control panel

## Control Panel

![panel](./public/img/panel.png)

## Video

[![video](./public/img/cover.jpg)](https://youtu.be/y3VsqAG2W88)

## Hardware

- Arduino Uno

- a Stepper Motor (Bipolar, or 4-wire)

- a Stepper Motor Driver (e.g. [TMC2208 Silent Step Stick](https://www.digikey.fi/product-detail/en/trinamic-motion-control-gmbh/TMC2208-SILENTSTEPSTICK/1460-1201-ND/6873626), [A4988](https://www.pololu.com/product/1182))

- 8V-35V Power Adapter

- a Barrel Power Jack

## Pin Connection (e.g. A4988)

![pololu](./public/img/Arduino_Stepper_Driver_TMC2208_pololu.jpg)

![fritzing](./public/img/Arduino_Stepper_Driver_TMC2208_fritzing.png)
