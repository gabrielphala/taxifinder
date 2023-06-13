const base_controller = require('../controllers/base');
const passenger_service = require('../../services/Passenger')

const { isUserVerified } = require('../../middleware');

module.exports = (router) => {
    router.post('/passenger/board', isUserVerified, base_controller.wrap_with_store(passenger_service.board));
    router.post('/passengers/get-by-current-trip', base_controller.wrap_with_store(passenger_service.getPassengersByCurrentTrip));
    router.post('/passengers/get-by-association', base_controller.wrap_with_store(passenger_service.getPassengersByAssociation));
};