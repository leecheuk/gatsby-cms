const {app, BrowserWindow, nativeImage, ipcMain} = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const {spawn, exec} = require('child_process');
const fs = require('fs');

let mainWindow;

// create window function
function createWindow() {
    let appIconUrl = path.join(__dirname, './assets/icons/icon@64.png');
    let appIcon = nativeImage.createFromPath(appIconUrl);
    mainWindow = new BrowserWindow({
        width: 1000, 
        height: 600,
        icon: appIconUrl,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.removeMenu();
    // open dev tools in development
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
    // load react app
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : 
        `file://${path.join(__dirname, '../build/index.html')}`);

    // close main window on closed event
    mainWindow.on('closed', () => mainWindow = null);
}

// run script
let child;
ipcMain.on('run-script', (e, cmd) => {
    if (cmd.type === 'start') {
        child = spawn('npm', ['start'], {
            cwd: './public/website'
        });
        child.stdout.setEncoding('utf8').on('data', (chunk) => {
            console.log(chunk)
        });
        child.on('close', () => {
            console.log('ended')
        });
    } else {
        child.stdin.pause();
        child.kill();
    }
});

// create file
ipcMain.on('create-file', (e, cmd) => {
    exec(`mkdir -p ${cmd.path}`, {
        cwd: './public/website'
    });
});

// write file
ipcMain.on('write-file', (e, cmd) => {
    writeFile(cmd);
});

// change values of config.json 
ipcMain.on('update-config', (e, updateContent) => {
    // get content 
    const path = './website/config/config.json';
    const config = JSON.parse(path);
    // loop through update contents 
    Object.keys(updateContent).forEach(key => {
        config[key] = updateContent[key];
    });
    writeFile({
        filename: path,
        content: config
    });
});

// get config file
ipcMain.on('get-config', (e) => {
    try {
        let config = require('./website/config/config.json');
        e.returnValue = {data: config};
    } catch(e) {
        console.log(e);
    }
});

// initialize
app.on('ready', createWindow);
app.on('window-all-closed', () => {
    app.quit();
});
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

// helper functions
function writeFile(fileObj) {
    fs.writeFile(fileObj.filename, fileObj.content, function () {
        if (err) {
            console.log(err);
        } else {
            console.log('write success');
        }
    });
}