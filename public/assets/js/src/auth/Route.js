import fetch from "../helpers/fetch.js";
import popup from "../helpers/popup.js"
import Passenger from "./Passenger.js";
import Trip from "./Trip.js";

import {
    formatUserRouteSearch,
    formatDriverRouteSearch,
    formatRoutes,
    formatRoutesForAssociation
} from "../helpers/format.js";

import { arrayNotEmpty } from "../helpers/array.js"

let cachedRoutes = [];

let tableHeader = [
    'Administrator', 'From', 'To', 'Association name'
]

let secondaryTableHeader = [
    '#', 'From', 'To'
]

let allowedColumns = [
    'firstname', 'lastname', 'dest_address', 'starting_address', 'association_name'
]

let secondaryAllowedColumns = [
    'starting_address', 'dest_address'
]

export default class Route {
    static async add (starting_coords, dest_coords) {
        const response = await fetch('/route/add', {
            body: {
                starting_address: $('#starting-location').val(),
                dest_address: $('#destination-location').val(),
                starting_coords,
                dest_coords
            }
        })

        if (!response.successful) {
            return popup({
                title: 'Could not add route',
                type: 'error',
                message: response.error
            })
        }

        starting_coords = '';
        dest_coords = '';

        $('#starting-location').val('');
        $('#destination-location').val('');

        return popup({
            title: 'Route added',
            type: 'success',
            message: 'Route added successfully'
        })
    }

    static async searchRoutesForUser () {
        const response = await fetch('/route/search/addresses', {
            body: {
                starting_address: $('#search-starting-location').val(),
                dest_address: $('#search-dest-location').val()
            }
        });

        if (response.successful) {
            $('#routes').html(formatUserRouteSearch(response.routes))

            if (!response.routes || response.routes && response.routes.length > 0)
                $('#no-content').hide();
            else $('#no-content').show();

            $('.table__body__row--route').on('click', async e => {
                const routeid = e.currentTarget.dataset.routeid;

                await Passenger.board(routeid)
            })
        };
    }

    static async searchRoutesForDriver () {
        const response = await fetch('/route/search/addresses', {
            body: {
                starting_address: $('#search-starting-location').val(),
                dest_address: $('#search-dest-location').val()
            }
        });

        if (response.successful) {
            $('#routes').html(formatDriverRouteSearch(response.routes))

            if (!response.routes || response.routes && response.routes.length > 0)
                $('#no-content').hide();
            else $('#no-content').show();

            $('.table__body__row--new-trip').on('click', async e => {
                const routeid = e.currentTarget.dataset.routeid;

                await Trip.add(routeid)
            })
        };
    }

    static async getForAdmin () {
        const response = await fetch('/routes/get-for-admin');

        cachedRoutes = response.routes;
        
        if (arrayNotEmpty(response.routes)) {
            return $('#route-list').html(formatRoutes(response.routes));
        }
    }

    static async getForAssociation () {
        const response = await fetch('/routes/get-for-association');

        cachedRoutes = response.routes;

        tableHeader = secondaryTableHeader;
        allowedColumns = secondaryAllowedColumns;
        
        if (arrayNotEmpty(response.routes)) {
            return $('#route-list').html(formatRoutesForAssociation(response.routes));
        }
    }

    static async downloadCSV () {
        const response = await fetch('/download/csv', {
            body: {
                data: cachedRoutes,
                tableHeader,
                allowedColumns
            }
        });

        if (response.successful) {
            const anchor = $('#download-anchor')

            anchor.attr('href', `/assets/downloads/tmp/${response.filename}`)

            anchor[0].click();
        }
    }
}