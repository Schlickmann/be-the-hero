const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Be the hero api'));

app.listen(3333);