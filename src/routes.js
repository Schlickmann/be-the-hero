const { Router } = require('express');

const routes = Router();

const NGOSController = require('./controllers/NGOSController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

// Non-Governmental Organisation routes
routes.get('/ngos', NGOSController.index);
routes.post('/ngos', NGOSController.store);

// NGO incidents
routes.get('/profile', ProfileController.index);

// Incident routes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;