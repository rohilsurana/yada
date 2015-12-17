/*jslint node: true */
/*jslint esnext: true */
'use strict';
const electron = require('electron');
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
const ipcMain = electron.ipcMain;  //Module to communicate between main and renderer process
const shell = electron.shell;  //Module to provide native desktop integration.
const db = require('NeDB');
// Report crashes to our server.
//TODO: Add options to this call so that it submits to YADA server
// electron.crashReporter.start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;
var addNewWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

function setupAddNewWindow() {
  addNewWindow = new BrowserWindow({width:450, height:250, show:false});
  addNewWindow.loadURL('file://' + __dirname + '/addnewdownload.html');
  addNewWindow.openDevTools();
  addNewWindow.on('closed', function() {
    setupAddNewWindow();
  });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1200, height: 700});
  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.openDevTools();
  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
  // Setup the add new download window
  setupAddNewWindow();
});

ipcMain.on('add-new', function(e) {
  console.log('ADD NEW');
  //set up the add new download window
  addNewWindow.webContents.send('reset',true);
  addNewWindow.show();
});

ipcMain.on('submit-add-new', function(e, newURL, saveName) {
  console.log(newURL);
});

ipcMain.on('clear-old', function(e) {
  console.log('CLEAR OLD');
});

ipcMain.on('open-downloads', function(e) {
  //TODO: Add respective paths for linux and darwin
  shell.openItem('C:\\Users\\Rohil\\Downloads');
});

ipcMain.on('pause-download', function(event, itemID) {

});

ipcMain.on('resume-download', function(event, itemID) {

});

ipcMain.on('cancel-download', function(event, itemID) {

});

ipcMain.on('retry-download', function(event, itemID) {

});

ipcMain.on('remove-download', function(event, itemID) {

});
