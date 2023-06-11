const Payment = require('../models/Payment')
const Trip = require('../models/Trip');

const Mailer = require("../helpers/Mailer");

module.exports = class PaymentService {
    static async add (wrap_res, body, { user_info }) {
        try {
            if ((await Payment.exists({ user_id: user_info.id, trip_id: body.trip_id })).found) return wrap_res;

            const tripDetails = await Trip.getById(body.trip_id);

            const payment = await Payment.insert({
                user_id: user_info.id,
                trip_id: body.trip_id,
                amount: parseInt(tripDetails.fare)
            })

            Mailer.send({
                to: user_info.email,
                from: 'Taxifinder Team <noreply@getaxinow.store>',
                subject: 'Payment successfully made',
                message: `
                    <p>Good day, ${user_info.firstname} ${user_info.lastname}</p>
                    <br>
                    <br>
                    <p>Trip details.</p>
                    <p>From: ${tripDetails.starting_address}</p>
                    <p>To: ${tripDetails.dest_address}</p>
                    <p>Driver: ${tripDetails.firstname} ${tripDetails.lastname}</p>
                    <br>
                    <br>
                    <p>Fare: ${tripDetails.fare}</p>
                `
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