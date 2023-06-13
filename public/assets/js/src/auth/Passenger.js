import fetch from "../helpers/fetch.js"
import popup from "../helpers/popup.js"

import { arrayNotEmpty } from "../helpers/array.js"
import { formatAssPassangers } from "../helpers/format.js"


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

    static async getPassengersByCurrentTrip () {
        const response = await fetch('/passengers/get-by-current-trip');
        const taxi_response = await fetch('/taxi/get');

        let passengerCount = 0;

        if (arrayNotEmpty(response.passengers)) {
            let formated = '';

            response.passengers.forEach(passenger => {
                formated += `
                    <div class="dashboard__passangers__passanger">
                        <p>${passenger.firstname} ${passenger.lastname} - ${passenger.email}</p>
                    </div>
                `
            });

            passengerCount = response.passengers.length;

            $('#passenger-list').html(formated)
        }

        let seats = 0;

        if (taxi_response && taxi_response.taxi && taxi_response.taxi.seats) seats = taxi_response.taxi.seats;

        $('#seats-count').text(
            seats ? `${seats - passengerCount} seats left` :
            'Taxi not added'
        )
    }

    static async getPassangersByAssociation () {
        const response = await fetch('/passengers/get-by-association');

        if (arrayNotEmpty(response.passengers)) {
            $('#passanger-list').html(formatAssPassangers(response.passengers));
        }
    }
}