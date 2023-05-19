import fetch from "../helpers/fetch.js"
import popup from "../helpers/popup.js"

export default class Passanger {
    static async board (route_id) {
        const response = await fetch('/passenger/board', {
            body: {
                route_id
            }
        })

        if (!response.successful) {
            popup({
                title: 'Could not book ride',
                type: 'error',
                message: response.error
            })

            return 0
        }

        setTimeout(() => {
            location.href = `/payment?trip=${response.trip_id}`;
        }, 2000);

        popup({
            title: 'Ride booked',
            type: 'success',
            message: 'Your ride has been successfully booked'
        })

        return 1;
    }
}