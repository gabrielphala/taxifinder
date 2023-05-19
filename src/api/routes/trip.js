const base_controller = require('../controllers/base');
const trip_service = require('../../services/Trip');

module.exports = (router) => {
    router.post('/trip/add', base_controller.wrap_with_store(trip_service.add));
    router.post('/trip/get/latest', base_controller.wrap_with_store(trip_service.getLatest));
    router.post('/trip/get-cost', base_controller.wrap(trip_service.getCost));

    router.post('/trips/get-for-admin', base_controller.wrap(trip_service.getTripsForAdmin));
    router.post('/trips/get-for-user', base_controller.wrap_with_store(trip_service.getTripsForUser));
    // router.post('/trips/search-all', base_controller.wrap(trip_service.searchAll));
};