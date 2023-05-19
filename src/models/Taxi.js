const { SQLifier } = require('sqlifier');

module.exports = new (class Taxi extends SQLifier {
    constructor() {
        super();

        this.schema('taxi', {
            id: { type: 'int', isAutoIncrement: true, isPrimary: true },
            make: { type: 'varchar', length: 15 },
            model: { type: 'varchar', length: 15 },
            seats: { type: 'int' },
            licence: { type: 'varchar', length: 12 },
            photo: { type: 'varchar', length: 60 },
            driver_id: { type: 'int', ref: 'user' },
            is_deleted: { type: 'boolean', default: false },
        })
    }

    updateByDriver (driverId, data) {
        this.update({ driver_id: driverId, is_deleted: false }, data)
    }

    remove (taxiId) {
        this.update({ id: taxiId }, { is_deleted: true })
    }
    
    getByDriver (driverId) {
        return this.findOne({
            condition: { driver_id: driverId, is_deleted: false }
        })
    }
})