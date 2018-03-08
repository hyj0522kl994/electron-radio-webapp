import { BrowserWindow } from "electron";

let win;
function createWindow() {
  win = new BrowserWindow({
    width: 900,
    height: 600,
  });
  win.loadURL(`file://${__dirname}/../../index.html`);
  win.on("close", () => {
    win = null;
  });
}

export default createWindow;
