/*jslint node: true */
/*jslint esnext: true */
/*global window: false */
/*global document: false */
'use strict';
// Load required modules
const url = require('url');
const http = require('http');
const ipcRenderer = require('electron').ipcRenderer;

var addressField = document.getElementById('address');
var filenameField = document.getElementById('filename');
// Register all initial event listeners
addressField.inputElement.addEventListener('input', function(event) {
  var parsedURL = url.parse(event.target.value);
  var options = {
      hostname: parsedURL.hostname,
      port: parsedURL.port,
      path: parsedURL.path,
      method: 'HEAD',
  };
  if(parsedURL.port===null) {
    if(parsedURL.protocol=='https:') {
      options.port = 443;
    }
    else if(parsedURL.protocol=='ftp:') {
      options.port = 21;
    }
    else {
      options.port = 80;
    }
  }
  console.log(JSON.stringify(options));
  var req = http.request(options, function(response) {
    console.log(JSON.stringify(response.headers,null,4));
    document.getElementById('size').innerHTML = response.headers['content-length'];
    // document.write("<pre>"+JSON.stringify(res.headers,null,4)+"</pre>");
    // document.write(res.headers["content-length"]);
    // totalSize = res.headers["content-length"];
    response.on('end', function() {
      console.log('No more data in response.');
    });
  });
  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });
  req.end();
});
document.getElementById('ok').addEventListener('click', function(event) {
  if(addressField.validate() && filenameField.validate()) {
    ipcRenderer.send('submit-add-new', addressField.value, filenameField.value);
    window.close();
  }
});
