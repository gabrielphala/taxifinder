const { SQLifier, SQLDate } = require('sqlifier');

module.exports = new (class Passenger extends SQLifier {
    constructor() {
        super();

        this.schema('passenger', {
            id: { type: 'int', isAutoIncrement: true, isPrimary: true },
            user_id: { type: 'int', ref: 'user' },
            route_id: { type: 'int', ref: 'route' },
            taxi_id: { type: 'int', ref: 'taxi' },
            trip_id: { type: 'int', ref: 'trip' },
            booked_on: { type: 'datetime', default: SQLDate.now() },
        })
    }

    getPassengersByTrip (trip_id) {
        return this.find({
            condition: { trip_id },
            join: {
                ref: 'user',
                id: 'user_id'
            }
        })
    }

    findExistingBooking (userId) {
        return this.findLatestOne({
            condition: { user_id: userId },
            join: {
                ref: 'trip',
                condition: { status: { $ne: 'complete'} }
            }
        })
    }

    getTripsForUser (userId) {
        return this.find({
            condition: { user_id: userId },
            join: [
                {
                    ref: 'trip',
                    id: 'trip_id'
                },
                {
                    ref: 'route',
                    id: 'route_id'
                },
                {
                    ref: 'taxi',
                    id: 'taxi_id'
                }
            ]
        })
    }

    getPassangersByRoute (route_id) {
        return this.find({
            condition: { route_id },
            join: [
                {
                    ref: 'trip',
                    id: 'trip_id'
                },
                {
                    ref: 'route',
                    id: 'route_id'
                },
                {
                    ref: 'taxi',
                    id: 'taxi_id'
                },
                {
                    ref: 'user',
                    id: 'user_id'
                }
            ]
        })
    }

    countPerTrip (trip_id) {
        return this.count({ trip_id })
    }
})