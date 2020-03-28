const { Router } = require('express');

const routes = Router();

// Controllers
const NGOController = require('./controllers/NGOController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// Validators
const NGOValidator = require('./validators/NGO');
const ProfileValidator = require('./validators/Profile');
const IncidentValidator = require('./validators/Incident');
const SessionValidator = require('./validators/Session');

routes.post('/sessions', SessionValidator.validStore(), SessionController.store);

// Non-Governmental Organisation routes
routes.get('/ngos', NGOController.index);

routes.post('/ngos', NGOValidator.validStore(), NGOController.store);

// NGO incidents
routes.get('/profile', ProfileValidator.validIndex(), ProfileController.index);

// Incident routes
routes.get('/incidents', IncidentValidator.validIndex(), IncidentController.index);

routes.post('/incidents', IncidentValidator.validStore(), IncidentController.store);

routes.delete('/incidents/:id', IncidentValidator.validDelete(), IncidentController.delete);


module.exports = routes;