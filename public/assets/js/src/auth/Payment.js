import fetch from "../helpers/fetch.js";

export default class Payment {
    static async add (tripId) {
        const response = await fetch('/payment/add', {
            body: {
                trip_id: tripId
            }
        })
    }

    static async finalize (tripId, payment_id) {
        const response = await fetch('/payment/finalize', {
            body: {
                trip_id: tripId,
                payment_id
            }
        })

        if (response.successful) return location.href = '/home'
    }

    static async exists (tripId) {
        const response = await fetch('/payment/exists', {
            body: {
                trip_id: tripId
            }
        })

        return response.exists;
    }
}