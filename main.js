
var app = require('app')

var BrowserWindow = require('browser-window')

var mainWindow = null


app.on('ready', function () {
  mainWindow = new BrowserWindow({
    height:500,
    resizable: false,
    title: 'Pinguino 2550 Hola Motor',
    width: 895
  })

  mainWindow.loadURL('file://' + __dirname + '/app/index.html')
    //Test Developper Tools
  //mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null
  })
})

