import { arrayNotEmpty } from "../helpers/array.js"
import fetch from "../helpers/fetch.js"
import { formatUsers } from "../helpers/format.js"

let cachedUsers = [];

const tableHeader = [
    '#', 'First name', 'Last name', 'Email address'
]

const allowedColumns = [
    'firstname', 'lastname', 'email'
]

export default class User {
    static async signUp () {
        const response = await fetch('/sign-up', {
            body: {
                firstname: $('#firstname').val(),
                lastname: $('#lastname').val(),
                email: $('#email-address').val(),
                type: 'user',
                password: $('#password').val(),
                passwordAgain: $('#password-again').val()
            }
        })

        if (response.successful) {
            $('#logger-error').hide()  

            return location.href = '/home'
        }

        $('#logger-error').text(response.error)
        $('#logger-error').show()  
    }

    static async signIn () {
        const response = await fetch('/sign-in', {
            body: {
                email: $('#email-address').val(),
                password: $('#password').val()
            }
        })

        if (response.successful) {
            $('#logger-error').hide()  

            return location.href = '/home'
        }

        $('#logger-error').text(response.error)
        $('#logger-error').show()  
    }

    static async getAllDrivers () {
        const response = await fetch('/users/get-all-drivers');

        cachedUsers = response.users;

        if (arrayNotEmpty(response.users)) {
            return $('#user-list').html(formatUsers(response.users));
        }
    }

    static async searchDrivers () {
        const response = await fetch('/users/search-drivers', {
            body: {
                searchValue: $('#search-value').val()
            }
        });

        cachedUsers = response.users;

        if (arrayNotEmpty(response.users)) {
            return $('#user-list').html(formatUsers(response.users));
        }

        $('#user-list').html('')
    }

    static async getAllPassengers () {
        const response = await fetch('/users/get-all-passengers');

        cachedUsers = response.users;

        if (arrayNotEmpty(response.users)) {
            return $('#user-list').html(formatUsers(response.users));
        }
    }

    static async searchPassengers () {
        const response = await fetch('/users/search-passengers', {
            body: {
                searchValue: $('#search-value').val()
            }
        });

        cachedUsers = response.users;

        if (arrayNotEmpty(response.users)) {
            return $('#user-list').html(formatUsers(response.users));
        }

        $('#user-list').html('')
    }

    static async downloadCSV () {
        const response = await fetch('/download/csv', {
            body: {
                data: cachedUsers,
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