const express = require('express');
const app = express();
const port = 3000;
const Log = require('./Logging Middleware/Log');
const shortenURL = require('./urlShortner');
const shortURL = require("@short-url/shorturl");



app.listen(port, async () => {
    await Log("backend", "error", "handler", "Recieved something");
    console.log("Listening")
})

app.post("/getShortenURL", async (req, res) => {
    console.log('Recieved request');
    const response = await shortenURL();
    console.log(response);
    res.send("Working fine");
})