const base_controller = require('../controllers/base');
const taxi_service = require('../../services/Taxi')

module.exports = (router) => {
    router.post('/taxi/add', base_controller.wrap_with_store(taxi_service.add));
    router.post('/taxi/get', base_controller.wrap_with_store(taxi_service.get));
    router.post('/taxi/remove', base_controller.wrap_with_store(taxi_service.delete));
};