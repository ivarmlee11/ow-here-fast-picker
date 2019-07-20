const express = require('express');
const robot = require('robotjs');
const characters = require('./characters.js');

const app = express();
const PORT = process.env.PORT || 5000;

let ticker = 0;

app.get('/characters/:resolution/:character', (req, res) => {
    let character = req.params.character;
    let desktopRes = req.params.resolution;
    setTimeout(() => { 
        while (ticker < 500) {
            robot.moveMouse(characters[character][desktopRes].x, characters[character][desktopRes].y)
            robot.mouseClick('left');
            ticker += 1;
        }
        ticker = 0;
        console.log('Hero locked and loaded.');
    }, 1000);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));