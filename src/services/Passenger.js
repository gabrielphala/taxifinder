const Trip = require('../models/Trip')
const Route = require('../models/Route')
const Passenger = require('../models/Passenger')

module.exports = class PassengerService {
    static async board (wrap_res, body, { user_info }) {
        try {
            const tripDetails = await Trip.getByRouteId(body.route_id)

            if (!tripDetails)
                throw 'There are no taxi that match your trip at the moment';

            const passengerCount = await Passenger.countPerTrip(tripDetails.id)

            if (passengerCount + 1 >= tripDetails.seats) {
                if (tripDetails.status != 'full')
                    Trip.setStatusToFull(tripDetails.id)

                throw 'Taxi is full';
            }

            const incomplete = await Trip.findUserIncompleteTrips(user_info.id);

            if (incomplete) {
                const routeDetails = await Route.getById(incomplete.route_id);

                throw `You have an imcomplete trip to ${routeDetails.dest_address}`
            };
            
            Passenger.insert({
                user_id: user_info.id,
                route_id: tripDetails.route_id,
                taxi_id: tripDetails.taxi_id,
                trip_id: tripDetails.id
            })
            
            wrap_res.trip_id = tripDetails.id;
            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }
}