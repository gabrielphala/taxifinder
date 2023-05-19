const Payment = require('../models/Payment')

module.exports = class PaymentService {
    static async add (wrap_res, body, { user_info }) {
        try {
            if ((await Payment.exists({ user_id: user_info.id, trip_id: body.trip_id })).found) return wrap_res;

            const payment = await Payment.insert({
                user_id: user_info.id,
                trip_id: body.trip_id,
                amount: 20
            })
            
            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }

    static async finalize (wrap_res, body, { user_info }) {
        try {
            const payment = await Payment.finalize({
                trip_id: body.trip_id,
                payment_id: body.payment_id,
                user_id: user_info.id
            })

            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }

    static async exists (wrap_res, body, { user_info }) {
        try {
            const payment = await Payment.exists({
                trip_id: body.trip_id,
                user_id: user_info.id,
                complete: true
            })

            wrap_res.exists = payment.found;
            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }
}