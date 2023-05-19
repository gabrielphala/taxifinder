const base_controller = require('../controllers/base');

module.exports = (router) => {
    router.get('/sign-out', base_controller.sign_out);
};