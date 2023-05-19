const { SQLifier } = require('sqlifier');

module.exports = new (class Route extends SQLifier {
    constructor() {
        super();

        this.schema('route', {
            id: { type: 'int', isAutoIncrement: true, isPrimary: true },
            starting_address: { type: 'varchar', length: 50 },
            dest_address: { type: 'varchar', length: 50 },
            taxi_association_admin_id: { type: 'int', ref: 'taxi_association_admin' },
            distance: { type: 'float' },
            fare: { type: 'float' },
            is_deleted: { type: 'boolean', default: false }
        })
    }

    getById (id) {
        return this.findOne({
            condition: {
                id,
                is_deleted: false
            }
        })
    }

    searchByAddresses (starting_address, dest_address) {
        return this.search({
            condition: {
                starting_address,
                dest_address,
                is_deleted: false
            }
        })
    }

    getForAdmin () {
        return this.search({
            condition: {
                is_deleted: false
            },
            join: {
                ref: 'taxi_association_admin',
                id: 'taxi_association_admin_id'
            }
        })
    }

    getForAssociation (taxi_association_admin_id) {
        return this.search({
            condition: {
                taxi_association_admin_id,
                is_deleted: false
            }
        })
    }
})