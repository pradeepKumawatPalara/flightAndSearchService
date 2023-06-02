const express = require('express');

const { FlightMiddlewares } = require('../../middlewares/index');

const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');
const AirplaneController = require('../../controllers/airplane-controller');
const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);

router.post(
    '/flights',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);
router.get('/flights', FlightController.getAll);
router.get('/flights/:id', FlightController.get);
router.patch('/flights/:id', FlightController.update);
router.delete('/flights/:id', FlightController.destory);

router.post('/airports', AirportController.create);
router.get('/airports', AirportController.getAll);
router.get('/airports/:id', AirportController.get);
router.patch('/airports/:id', AirportController.update);
router.delete('/airports/:id', AirportController.destroy);

router.post('/airplanes', AirplaneController.create);
router.get('/airplanes', AirplaneController.getAll);
router.get('/airplanes/:id', AirplaneController.get);
router.patch('/airplanes/:id', AirplaneController.update);
router.delete('/airplanes/:id', AirplaneController.destroy);

module.exports = router;