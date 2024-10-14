// app.js
const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => {
    res.send('Hello World from App 4!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});