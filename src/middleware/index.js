const jwt = require('../helpers/Jwt');

module.exports.isUserVerified = (req, res, next) => {
    if (
        (!req.store) ||
        (req.store && !req.store.user_info) ||
        (req.store && req.store.user_info && req.store.user_info.type != 'user')
    ) return res.redirect('/sign-in')

    next();
}

module.exports.isDriverVerified = (req, res, next) => {
    if (
        (!req.store) ||
        (req.store && !req.store.user_info) ||
        (req.store && req.store.user_info && req.store.user_info.type != 'driver')
    ) return res.redirect('/driver/sign-in')

    next();
}

module.exports.isAssociationVerified = (req, res, next) => {
    if (
        (!req.store) ||
        (req.store && !req.store.taxi_association_admin_info)
    ) return res.redirect('/driver/sign-in')

    next();
}

module.exports.loadUserInfo = (req, res, next) => {
    if (!req.cookies || req.cookies && !req.cookies['tf_user'])
        return next();

    jwt.verify(req.cookies['tf_user'].jwtAccess, (user_info) => {
        if (!req.store) req.store = {}
        req.store.user_info = user_info;
        res.locals.user_info = user_info;
    });

    next();
}

module.exports.loadTaxiAssociationAdminInfo = (req, res, next) => {
    if (!req.cookies || req.cookies && !req.cookies['tf_taa'])
        return next();

    jwt.verify(req.cookies['tf_taa'].jwtAccess, (taxi_association_admin) => {
        if (!req.store) req.store = {}
        req.store.taxi_association_admin_info = taxi_association_admin;
        res.locals.taxi_association_admin_info = taxi_association_admin;
    });

    next();
}

module.exports.loadPageDetails = (req, res, next) => {
    res.locals.url = {
        query: req.query,
        params: req.params
    }

    next()
}