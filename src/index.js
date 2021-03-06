const express = require('express');
const app = express();

app.get('/greeting', (req, res) => {
    res.send("HELLo");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
});