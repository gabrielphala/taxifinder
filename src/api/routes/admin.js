const base_controller = require('../controllers/base');

module.exports = (router) => {
    router.get('/admin/sign-in', base_controller.render('admin/sign-in', 'Sign in'));
    router.get('/admin/taxi-associations', base_controller.render('admin/tas', 'Taxi associations'));
    router.get('/admin/trips', base_controller.render('admin/trips', 'Trips'));
    router.get('/admin/drivers', base_controller.render('admin/drivers', 'Drivers'));
    router.get('/admin/passengers', base_controller.render('admin/passengers', 'Passengers'));
    router.get('/admin/routes', base_controller.render('admin/routes', 'Routes'));
};