const base_controller = require('../controllers/base');
const payment_service = require('../../services/Payment');

module.exports = (router) => {
    router.post('/payment/add', base_controller.wrap_with_store(payment_service.add));
    router.post('/payment/finalize', base_controller.wrap_with_store(payment_service.finalize));
    router.post('/payment/exists', base_controller.wrap_with_store(payment_service.exists));
};