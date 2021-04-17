const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Welcome to the homepage Dude");
});

const port = process.env.port || 8080;

app.listen(port,() => {
    console.log("Wazzapppppp dude");
});

