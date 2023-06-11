const Trip = require('../models/Trip');
const Taxi = require('../models/Taxi');
const Route = require('../models/Route');
const Passenger = require('../models/Passenger');

module.exports = class TripService {
    static async add (wrap_res, body, { user_info }) {
        try {
            const taxiDetails = await Taxi.getByDriver(user_info.id)

            if (!taxiDetails)
                throw 'Could not find a taxi';

            if ((await Trip.exists([
                {
                    driver_id: user_info.id,
                    status: 'en route'
                },
                {
                    driver_id: user_info.id,
                    status: 'boarding'
                },
                {
                    driver_id: user_info.id,
                    status: 'in queue'
                }
            ])).found)
                throw 'Trip already added';

            let status = 'in queue';

            if (!(await Trip.exists({
                route_id: body.route_id,
                status: 'boarding'
            })).found) {
                status = 'boarding'
            }

            const routeDetails = await Route.getById(body.route_id);

            if (!routeDetails) 
                throw 'No route available, could have been removed';

            Trip.insert({
                route_id: body.route_id,
                fare: routeDetails.distance * 1.1,
                driver_id: user_info.id,
                taxi_id: taxiDetails.id,
                status
            });

            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }

    static async getLatest (wrap_res, body, { user_info }) {
        try {
            const latest = await Trip.getLatest(user_info.id);

            wrap_res.trip = latest ? latest.toObject() : {};

            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }

    static async getCost (wrap_res, body) {
        try {
            wrap_res.cost = (await Trip.findOne(body.trip_id)).fare;
            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }
    
    static async getTripsForAdmin (wrap_res, _body) {
        try {
            wrap_res.trips = await Trip.getTripsForAdmin();
            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }

    static async getTripsForUser (wrap_res, _body, { user_info }) {
        try {
            wrap_res.trips = await Passenger.getTripsForUser(user_info.id);
            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }

    static async searchAll (wrap_res, body) {
        try {
            wrap_res.trips = await Trip.searchAll(body.searchValue);
            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }
}