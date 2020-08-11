const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.use((_, res) => {
    res.sendFile(`${__dirname}/src/index.html`);
});

app.listen(5000, () => console.log('App is running on http://localhost:5000...'));
