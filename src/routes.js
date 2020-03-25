const { Router } = require('express');

const routes = Router();

const NGOSController = require('./controllers/NGOSController');

routes.post('/ngos', NGOSController.store);


module.exports = routes;