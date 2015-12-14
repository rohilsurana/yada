var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var ipc = require('ipc');  //Module to communicate between main and renderer process
var shell = require('shell');  //Module to provide native desktop integration.
// Report crashes to our server.
require('crash-reporter').start();  //Add options to this call so that it submits

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});
  addNewWindow = new BrowserWindow({width:200, height:150, show:false});
  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});

ipc.on('add-new', function(e) {
  console.log('ADD NEW');
  shell.beep();
});

ipc.on('clear-old', function(e) {
  console.log('CLEAR OLD');
});

ipc.on('open-downloads', function(e) {
  shell.openItem("C:\\Users\\Rohil\\Downloads");
});

ipc.on('pause-download', function(event, itemID) {

});

ipc.on('resume-download', function(event, itemID) {

});

ipc.on('cancel-download', function(event, itemID) {

});

ipc.on('retry-download', function(event, itemID) {

});

ipc.on('remove-download', function(event, itemID) {

});
