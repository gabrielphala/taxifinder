import { arrayNotEmpty } from "../helpers/array.js";
import fetch from "../helpers/fetch.js";
import { formatTrips, formatTripHistory } from "../helpers/format.js";
import popup from "../helpers/popup.js"

export default class Trip {
    static async add (route_id) {
        const response = await fetch('/trip/add', {
            body: {
                route_id
            }
        })

        if (!response.successful) {
            return popup({
                title: 'Could not add trip',
                type: 'error',
                message: response.error
            })
        }

        return popup({
            title: 'Trip added',
            type: 'success',
            message: 'Trip added successfully'
        })
    }

    static async getLatest () {
        const response = await fetch('/trip/get/latest');

        if (response.successful) {
            $('#latest-trip').html(`
                <ul class="table__body__row">
                    <li class="table__body__row__item">${response.trip.starting_address}</li>
                    <li class="table__body__row__item">${response.trip.dest_address}</li>
                    <li class="table__body__row__item">${response.trip.distance}</li>
                    <li class="table__body__row__item">R${Math.floor(response.trip.fare)}</li>
                    <li class="table__body__row__item">${response.trip.status}</li>
                </ul>
            `)
        };
    }

    static async getForAdmin () {
        const response = await fetch('/trips/get-for-admin');
        
        if (arrayNotEmpty(response.trips)) {
            return $('#trip-list').html(formatTrips(response.trips));
        }
    }

    static async getForUser () {
        const response = await fetch('/trips/get-for-user');
        
        if (arrayNotEmpty(response.trips)) {
            return $('#trip-list').html(formatTripHistory(response.trips));
        }
    }

    static async getCost (trip_id) {
        const response = await fetch('/trip/get-cost', { body: { trip_id } });
        
        return response.cost;
    }

    static async searchAll () {
        const response = await fetch('/trips/search-all', {
            body: {
                searchValue: $('#search-value').val()
            }
        });

        if (arrayNotEmpty(response.trips)) {
            return $('#trip-list').html(formatTrips(response.trips));
        }
        
        return $('#trip-list').html('');
    }
}