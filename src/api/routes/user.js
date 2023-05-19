const base_controller = require('../controllers/base');
const user_service = require('../../services/User');

const { isUserVerified } = require('../../middleware');

module.exports = (router) => {
    router.get('/sign-up', base_controller.render('user/sign-up', 'Sign up'));
    router.get('/sign-in', base_controller.render('user/sign-in', 'Sign in'));
    router.get('/home', isUserVerified, base_controller.render('user/home', 'Home'));
    router.get('/rides', isUserVerified, base_controller.render('user/rides', 'Rides'));
    router.get('/payment', base_controller.render('user/pay', 'Payment'));

    router.post('/sign-up', base_controller.wrap(user_service.sign_up));
    router.post('/sign-in', base_controller.wrap(user_service.sign_in));

    router.post('/users/get-all-passengers', base_controller.wrap(user_service.getAllPassengers));
    router.post('/users/search-passengers', base_controller.wrap(user_service.searchPassengers));
    router.post('/users/get-all-drivers', base_controller.wrap(user_service.getAllDrivers));
    router.post('/users/search-drivers', base_controller.wrap(user_service.searchDrivers));
    // router.post('/users/get-all-taa', base_controller.wrap(user_service.getAllTaxiAssociationAdmins));
};