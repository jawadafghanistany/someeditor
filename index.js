const { app, BrowserWindow } = require(`electron`);

app.on(`ready`, () => {
    const win = new BrowserWindow({
        "width": 400,
        "height": 400
    });
    win.loadFile('assets/html/index.html');
    win.webContents.openDevTools();
    debugger;
});
