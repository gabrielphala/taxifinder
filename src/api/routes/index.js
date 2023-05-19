const admin_routes = require('./admin');
const user_routes = require('./user');
const association_routes = require('./taxi-association');
const driver_routes = require('./driver');
const route_routes = require('./route');
const taxi_routes = require('./taxi');
const trip_routes = require('./trip');
const passenger_routes = require('./passenger');
const base_routes = require('./base');
const download_routes = require('./download');
const payment_routes = require('./payment');

module.exports = (router) => {
    admin_routes(router);
    user_routes(router);
    association_routes(router);
    driver_routes(router);
    route_routes(router);
    taxi_routes(router);
    trip_routes(router);
    passenger_routes(router);
    base_routes(router)
    download_routes(router)
    payment_routes(router)
};