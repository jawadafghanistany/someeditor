const {app, BrowserWindow} = require(`electron`);

app.on(`ready`, () => {
    new BrowserWindow({
        "width": 400,
        "height": 400
    });
});
