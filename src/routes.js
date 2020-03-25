const { Router } = require('express');

const routes = Router();

const NGOSController = require('./controllers/NGOSController');
const IncidentController = require('./controllers/IncidentController');

// Non-Governmental Organisation routes
routes.get('/ngos', NGOSController.index);
routes.post('/ngos', NGOSController.store);


// Incident routes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);


module.exports = routes;