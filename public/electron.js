const {app, BrowserWindow, nativeImage, ipcMain} = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const {spawn} = require('child_process');

let mainWindow;

// create window function
function createWindow() {
    let appIconUrl = path.join(__dirname, './assets/icons/icon@64.png');
    let appIcon = nativeImage.createFromPath(appIconUrl);
    mainWindow = new BrowserWindow({
        width: 800, 
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