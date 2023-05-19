const base_controller = require('../controllers/base');

const { isDriverVerified } = require('../../middleware');

module.exports = (router) => {
    router.get('/driver/sign-up', base_controller.render('driver/sign-up', 'Sign up'));
    router.get('/driver/sign-in', base_controller.render('driver/sign-in', 'Sign in'));

    router.get('/driver', isDriverVerified, base_controller.render('driver/home', 'Home'));
    router.get('/driver/plan-trip', isDriverVerified, base_controller.render('driver/new-trip', 'Plan a trip'));
    router.get('/driver/trip-history', isDriverVerified, base_controller.render('driver/trip-history', 'Trip history'));
    router.get('/driver/my-taxi', isDriverVerified, base_controller.render('driver/my-taxi', 'My taxi'));
    router.get('/driver/profile', isDriverVerified, base_controller.render('driver/profile', 'Profile'));
};