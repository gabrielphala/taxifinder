const { SQLifier } = require('sqlifier');

module.exports = new (class User extends SQLifier {
    constructor () {
        super();

        this.schema('user', {
            id: { type: 'int', isAutoIncrement: true, isPrimary: true },
            firstname: { type: 'varchar', length: 15 },
            lastname: { type: 'varchar', length: 15 },
            email: { type: 'varchar', length: 30 },
            type: { type: 'varchar', length: 8 },
            password: { type: 'varchar', length: 250 },
            is_deleted: { type: 'boolean', default: false },
        })
    }

    getByEmail (email) {
        return this.findOne({ condition: { email } });
    }

    getAllDrivers () {
        return this.find({ condition: { type: 'driver' } });
    }

    searchDrivers (searchValue) {
        return this.search({
            condition: [
                { firstname: searchValue, type: 'driver' },
                { lastname: searchValue, type: 'driver' },
                { email: searchValue, type: 'driver' },
            ]
        })
    }

    getAllPassengers () {
        return this.find({ condition: { type: 'user' } });
    }

    searchPassengers (searchValue) {
        return this.search({
            condition: [
                { firstname: searchValue, type: 'user' },
                { lastname: searchValue, type: 'user' },
                { email: searchValue, type: 'user' },
            ]
        })
    }
})