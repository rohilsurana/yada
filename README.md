# YADA

Yet another downloader app

**Clone and run for a quick way to see it in action.**

This is a downloader application based on the Electron framework(formerly atom-shell).

It is currently in development stage and is meant to download files via http(s)
 or ftp protocol. More protocols will be supported in later versions.

 It will download files using multiple connections.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/rohilsurana/yada.git
# Go into the repository
$ cd yada
# Install dependencies and run the app
$ npm install && npm start
```

## Dependecies

##### Backend:
* [Electron](http://electron.atom.io)
* [NeDB](https://github.com/louischatriot/nedb)

##### Ui:
* [Polymer paper-elements](https://www.polymer-project.org/1.0/)
* [download-item](https://rohilsurana.github.io/download-item/)
