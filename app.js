/*jslint node: true */
/*jslint esnext: true */
/*global window: false */
/*global document: false */
'use strict';
// Load required modules
const electron = require('electron');
const http = electron.http;
const urlParse = electron.url;
const ipcRenderer = electron.ipcRenderer;

// //Load database using NeDB
// db = new DataStore({filename: "mainDb"});
// //TODO Add a settings datastore to keep downloads folder link and other settings
// db.loadDatabase(function(err){
//   if(err!==null) {
//     console.log("Error Occured with the database at loading. Error: " + err);
//   }
//   else {
//     console.log("Successfully loaded the database.");
//   }
// });


// Regiser all initial event listners here
document.getElementById('add-new').addEventListener('click', sendAddNew);
document.getElementById('clear-all').addEventListener('click', sendClearOld);
document.getElementById('open-folder').addEventListener('click', sendOpenDownloadsFolder);

//All event handlers
function sendAddNew() {
  ipcRenderer.send('add-new');
}

function sendClearOld() {
  ipcRenderer.send('clear-old');
}

function sendOpenDownloadsFolder() {
  ipcRenderer.send('open-downloads');
}

function sendPauseDownload(itemID) {
  ipcRenderer.send('pause-download', itemID);
}

function sendResumeDownload(itemID) {
  ipcRenderer.send('resume-download', itemID);
}

function sendCancelDownload(itemID) {
  ipcRenderer.send('cancel-download', itemID);
}

function sendRetryDownload(itemID) {
  ipcRenderer.send('retry-download', itemID);
}

function sendRemoveDownload(itemID) {
  ipcRenderer.send('remove-download', itemID);
}

function sendOpenDownload(itemID) {
  ipcRenderer.send('open-download', itemID);
}

function sendShowDownload(itemID) {
  ipcRenderer.send('show-download', itemID);
}

ipcRenderer.on('download-paused', function(event, itemID) {

});

ipcRenderer.on('download-failed', function(event, itemID) {

});

ipcRenderer.on('download-resumed', function(event, itemID) {

});

ipcRenderer.on('download-cancelled', function(event, itemID) {

});

ipcRenderer.on('download-removed', function(event, itemID) {

});

ipcRenderer.on('download-updated', function(event, itemID) {

});

ipcRenderer.on('download-completed', function(event, itemID) {

});

//TODO Make this function to open a dialog to add a new download
//TODO Add feature to automatically paste copied link if valid
//TODO Add feature to show size and resume capability of the link
//TODO If link doesn't have protocol specified add http protocol
//TODO Add the new download to db
//TODO Show the recently added record as a new download item


function createDownloadItem(newItem) {
  var downloadItem = document.createElement('download-item');
  downloadItem.item = JSON.stringify(newItem);
  var mainContainer = document.getElementById('main-container');
  mainContainer.insertBefore(downloadItem, mainContainer.firstChild);
}

//TODO Make this function so that it just removes completed or error downloads
//TODO Add function to clear all download items removed in previous step
function clearOldRecords() {
  // db.remove({}, {multi: true}, function(err,numRecords) {
  //   console.log("Removed " + numRecords + " records.");
  // });
  console.log("Cleared records");
}
