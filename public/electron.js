const {app, BrowserWindow, nativeImage} = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

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
    // load react app
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : 
        `file://${path.join(__dirname, '../build/index.html')}`);

    // close main window on closed event
    mainWindow.on('closed', () => mainWindow = null);
}

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