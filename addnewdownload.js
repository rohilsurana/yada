/*jslint node: true */
/*jslint esnext: true */
/*global window: false */
/*global document: false */
'use strict';
// Load required modules
const ipcRenderer = require('electron').ipcRenderer;
// Register all initial event listeners
document.getElementById('ok').addEventListener('click', submit);
var addressField = document.getElementById('address');
var filenameField = document.getElementById('filename');
function submit(e) {
  if(addressField.validate() && filenameField.validate()) {
    ipcRenderer.send('submit-add-new', addressField.value, filenameField.value);
    window.close();
  }
}
