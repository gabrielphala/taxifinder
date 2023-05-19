import fetch from "../helpers/fetch.js"
import { closeModal } from "../helpers/modal.js";
import { arrayNotEmpty } from "../helpers/array.js";
import { formatTaxiAssociationAdmins } from "../helpers/format.js";

let cachedUsers = [];

const tableHeader = [
    '#', 'First name', 'Last name', 'Email address', 'Association name'
]

const allowedColumns = [
    'firstname', 'lastname', 'email', 'association_name'
]

export default class TaxiAssociationAdmin {
    static async add () {
        const response = await fetch('/association/add', {
            body: {
                firstname: $('#taa-firstname').val(),
                lastname: $('#taa-lastname').val(),
                email: $('#taa-email-address').val(),
                association_name: $('#taa-association-name').val()
            }
        })

        if (response.successful) {
            $('#new-tas-error').hide();

            return TaxiAssociationAdmin.getAll();
        }

        $('#new-tas-error').text(response.error)
        $('#new-tas-error').show()  
    }

    static async getAll () {
        const response = await fetch('/association/get-all-admins');

        cachedUsers = response.users;

        if (arrayNotEmpty(response.users)) {
            closeModal('tas-admin');

            return $('#user-list').html(formatTaxiAssociationAdmins(response.users));
        }
    }

    static async searchAll () {
        const response = await fetch('/association/search-admins', {
            body: {
                searchValue: $('#search-value').val()
            }
        });

        cachedUsers = response.users;

        if (arrayNotEmpty(response.users)) {
            closeModal('tas-admin');

            return $('#user-list').html(formatTaxiAssociationAdmins(response.users));
        }

        return $('#user-list').html('');
    }

    static async signIn () {
        const response = await fetch('/association/sign-in', {
            body: {
                email: $('#email-address').val(),
                password: $('#password').val()
            }
        })

        if (response.successful) {
            $('#logger-error').hide()

            return location.href = '/association/new-route'
        }

        $('#logger-error').text(response.error)
        $('#logger-error').show()  
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