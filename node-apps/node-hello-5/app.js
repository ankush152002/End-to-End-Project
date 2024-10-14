// app.js
const express = require('express');
const app = express();
const port = 3004;

app.get('/', (req, res) => {
    res.send('Hello World from App 5!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
