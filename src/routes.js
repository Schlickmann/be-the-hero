const { Router } = require('express');

const routes = Router();

routes.post('/', (req, res) => res.json(req.body));


module.exports = routes;