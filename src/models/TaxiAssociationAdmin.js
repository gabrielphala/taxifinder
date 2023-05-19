const { SQLifier } = require('sqlifier');

module.exports = new (class TaxiAssociationAdmin extends SQLifier {
    constructor () {
        super();

        this.schema('taxi_association_admin', {
            id: { type: 'int', isAutoIncrement: true, isPrimary: true },
            firstname: { type: 'varchar', length: 15 },
            lastname: { type: 'varchar', length: 15 },
            email: { type: 'varchar', length: 30 },
            association_name: { type: 'varchar', length: 30 },
            password: { type: 'varchar', length: 250 },
        })
    }

    getByEmail (email) {
        return this.findOne({ condition: { email } });
    }

    getAll () {
        return this.find();
    }

    searchAll (searchValue) {
        return this.search({
            condition: [
                { firstname: searchValue },
                { lastname: searchValue },
                { email: searchValue },
                { association_name: searchValue }
            ]
        })
    }
})