const { SQLifier } = require('sqlifier');

module.exports = new (class Trip extends SQLifier {
    constructor() {
        super();

        this.schema('trip', {
            id: { type: 'int', isAutoIncrement: true, isPrimary: true },
            route_id: { type: 'int', ref: 'route' },
            taxi_id: { type: 'int', ref: 'taxi' },
            fare: { type: 'float' },
            driver_id: { type: 'int', ref: 'user' },
            status: { type: 'varchar', length: 10 }
        })
    }

    findUserIncompleteTrips (userId) {
        return this.findOne({
            condition: { status: { $ne: 'complete' } },
            join: {
                ref: 'passenger', 
                condition: { user_id: userId, 'trip_id': { $r: 'trip.id' } }
            }
        })
    }

    getTripsForAdmin () {
        return this.find({
            join: [
                {
                    ref: 'route',
                    id: 'driver_id'
                },
                {
                    ref: 'taxi',
                    id: 'taxi_id'
                },
                {
                    ref: 'user',
                    id: 'driver_id'
                }
            ]
        });
    }

    getByRouteId (route_id) {
        return this.findOne({
            condition: { route_id },
            join: { ref: 'taxi', id: 'taxi_id' }
        })
    }

    getLatest (driverId) {
        return this.findLatestOne({
            condition: { driver_id: driverId }
        })
    }

    setStatusToFull (id) {
        this.update({ id }, { status: 'full' })
    }
})