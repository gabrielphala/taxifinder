const base_controller = require('../controllers/base');
const route_service = require('../../services/Route');

module.exports = (router) => {
    router.post('/route/add', base_controller.wrap_with_store(route_service.add));
    router.post('/route/search/addresses', base_controller.wrap_with_store(route_service.searchByAddresses));

    router.post('/routes/get-for-admin', base_controller.wrap(route_service.getForAdmin));
    router.post('/routes/get-for-association', base_controller.wrap_with_store(route_service.getForAssociation));
};