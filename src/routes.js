const { Router } = require('express');

const route = Router();

route.get('/', (req, res) => res.json({message: 'Oi Juliani'}));


module.exports = route;