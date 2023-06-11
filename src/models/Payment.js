const { SQLifier, SQLDate } = require('sqlifier');

module.exports = new (class Payment extends SQLifier {
    constructor() {
        super();

        this.schema('payment', {
            id: { type: 'int', isAutoIncrement: true, isPrimary: true },
            user_id: { type: 'int', ref: 'user' },
            trip_id: { type: 'int', ref: 'trip' },
            payment_id: { type: 'varchar', length: 30, default: null },
            complete: { type: 'boolean', default: false },
            amount: { type: 'int', length: 4 },
            paid_on: { type: 'datetime', default: SQLDate.now },
        })
    }

    finalize ({ trip_id, user_id, payment_id }) {
        this.update({ trip_id, user_id }, { payment_id, complete: true })
    }

    
})