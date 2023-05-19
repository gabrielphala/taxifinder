import fetch from "../helpers/fetch.js";
import popup from "../helpers/popup.js"

export default class Taxi {
    static async add () {
        const response = await fetch('/taxi/add', {
            body: {
                make: $('#taxi-make').val(),
                model: $('#taxi-model').val(),
                seats: $('#taxi-seats').val(),
                licence: $('#taxi-licence').val(),
            }
        })

        if (!response.successful) {
            return popup({
                title: 'Could not add taxi',
                type: 'error',
                message: response.error
            })
        }

        return popup({
            title: 'Taxi added',
            type: 'success',
            message: 'Successfully added a new taxi'
        })
    }

    static async remove () {
        const response = await fetch('/taxi/remove')

        if (!response.successful) {
            return popup({
                title: 'Could not remove taxi',
                type: 'error',
                message: response.error
            })
        }

        location.reload()
    }

    static async loadTaxiInfo () {
        const response = await fetch('/taxi/get');

        if (response.successful && response.taxi) {
            $('#taxi-make').val(response.taxi.make || '');
            $('#taxi-model').val(response.taxi.model || '');
            $('#taxi-seats').val(response.taxi.seats || '');
            $('#taxi-licence').val(response.taxi.licence || '');
        }
    }
}