const base_controller = require('../controllers/base');
const taxi_association_admin_service = require('../../services/TaxiAssociationAdmin');
const { isAssociationVerified } = require('../../middleware');

module.exports = (router) => {
    router.get('/association/new-route', isAssociationVerified,  base_controller.render('association/new-route', 'New route'));
    router.get('/association/routes', isAssociationVerified, base_controller.render('association/routes', 'Route'));
    router.get('/association/passangers', isAssociationVerified, base_controller.render('association/passangers', 'Passangers'));
    router.get('/association/sign-in', base_controller.render('association/sign-in', 'Sign in'));

    router.post('/association/add', base_controller.wrap(
        taxi_association_admin_service.add
    ));

    router.post('/association/sign-in', base_controller.wrap(taxi_association_admin_service.sign_in));

    router.post('/association/get-all-admins', base_controller.wrap(taxi_association_admin_service.getAll));
    router.post('/association/search-admins', base_controller.wrap(taxi_association_admin_service.searchAll));
};