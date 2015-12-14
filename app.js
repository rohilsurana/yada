// // Wait for polyfilled browser to get ready with Web Components
// var webComponenetsReady = false;
// document.addEventListener('WebComponentsReady', function() {
//   webComponenetsReady = true;
// });
// Load required modules
window.$ = window.jQuery = require("jquery");
var http = require("http");
var urlParse = require("url");
var ipc = require("ipc");
var shell = require('shell');


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
$("#add-new").bind('click', sendAddNew);
$("#clear-all").bind('click', sendClearOld);
$("#open-folder").bind('click', sendOpenDownloadsFolder);

//All event handlers
function sendAddNew() {
  ipc.send('add-new');
}

function sendClearOld() {
  ipc.send('clear-old');
}

function sendOpenDownloadsFolder() {
  ipc.send('open-downloads');
}

function sendPauseDownload(itemID) {
  ipc.send('pause-download', itemID);
}

function sendResumeDownload(itemID) {
  ipc.send('resume-download', itemID);
}

function sendCancelDownload(itemID) {
  ipc.send('cancel-download', itemID);
}

function sendRetryDownload(itemID) {
  ipc.send('retry-download', itemID);
}

function sendRemoveDownload(itemID) {
  ipc.send('remove-download', itemID);
}

function sendOpenDownload(itemID) {
  ipc.send('open-download', itemID);
}

function sendShowDownload(itemID) {
  ipc.send('show-download', itemID);
}

ipc.on('download-paused', function(event, itemID) {

});

ipc.on('download-failed', function(event, itemID) {

});

ipc.on('download-resumed', function(event, itemID) {

});

ipc.on('download-cancelled', function(event, itemID) {

});

ipc.on('download-removed', function(event, itemID) {

});

ipc.on('download-updated', function(event, itemID) {

});

ipc.on('download-completed', function(event, itemID) {

});

//TODO Make this function to open a dialog to add a new download
//TODO Add feature to automatically paste copied link if valid
//TODO Add feature to show size and resume capability of the link
//TODO If link doesn't have protocol specified add http protocol
//TODO Add the new download to db
//TODO Show the recently added record as a new download item


function createDownloadItem(newItem) {
  $downloadItem = $("<download-item>").attr("item", JSON.stringify(newItem));
  $("#main-container").prepend($downloadItem);
}

//TODO Make this function so that it just removes completed or error downloads
//TODO Add function to clear all download items removed in previous step
function clearOldRecords() {
  db.remove({}, {multi: true}, function(err,numRecords) {
    console.log("Removed " + numRecords + " records.");
  });
  console.log("Cleared records");
}
