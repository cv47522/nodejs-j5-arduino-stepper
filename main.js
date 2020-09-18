// Electron Desktop window

const { app, BrowserWindow } = require('electron');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
    // Create the browser window
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // and load the index.html of the app.
    mainWindow.loadFile('index.html');
    // mainWindow.loadURL('http://localhost:3000/');
    // mainWindow.focus();

    // Open the DevTool
    mainWindow.webContents.openDevTools()
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});


app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

/* without fs */
// // create a server object:
// http.createServer((req, res) => {
//     // add an HTTP Header
//     res.writeHead(200, {'Content-Type': 'text/html'});

//     // write a response to the client
//     res.write(req.url);
//     res.write('<br/>The current time: ' + dt.myDataTime())

//     // enter this url for testing: http://localhost:8080/?year=2017&month=July
//     let q = url.parse(req.url, true).query;
//     let txt = '<br/>' + q.year + ' ' + q.month;
//     res.write(txt);

//      // end the response
//     res.end('<br/>Hello world!');
// }).listen(8080); // the server object listens on port 8080


/* with fs: create a Node.js file that reads the HTML file, and return the content */
// http.createServer((req, res) => {
//     let q = url.parse(req.url, true);
//     let filename = '.' + q.pathname + '.html';

//     fs.readFile(filename, (err, data) => {
//         if (err) {
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             return res.write('404 Not Found');
//         }
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });

    // // create a new file or appends the specified content
    // // at the end of the specified file
    // fs.appendFile('myAppendFile.txt', 'Hello content!', (err) => {
    //     if (err) throw err;
    //     console.log('Append Saved!');
    // });

    // // create/open a file writing, "w" flag is for "writing"
    // fs.open('myOpenFile.txt', 'w', (err, file) => {
    //     if (err) throw err;
    //     console.log('Open Saved!');
    // });

    // // replaces the specified file and content
    // fs.writeFile('myWriteFile.txt', 'This is my text', (err) => {
    //     if (err) throw err;
    //     console.log('Write Saved!');
    // });

// }).listen(8080);