import { app, BrowserWindow } from 'electron';
import path from 'path';
import { isDev } from './util.js';
const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      minWidth: 400, // 设置最小宽度
      minHeight: 300, // 设置最小高度
    //   webPreferences: {
    //     preload: path.join(__dirname, 'preload.js'),
    //   },
    });

    if(isDev()){
      mainWindow.loadURL('http://localhost:5123');
    }else{
      mainWindow.loadFile(path.join(app.getAppPath(),'/dist-vue/index.html'))
    }
  };

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});