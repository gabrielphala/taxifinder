const TaxiAssociationAdmin = require('../models/TaxiAssociationAdmin')
const jwt = require("../helpers/Jwt");
const { hash, isSame } = require('../helpers/Hasher')

const v = require("../helpers/Validation")

module.exports = class AssociationService {
    static async add (wrap_res, body) {
        try {
            if ((await TaxiAssociationAdmin.exists({ email: body.email })).found)
                throw `Account with email: ${body.email} already exists`

            if ((await TaxiAssociationAdmin.exists({ association_name: body.association_name })).found)
                throw `Account with association name: ${body.association_name} already exists`

            v.validate({
                'First name': { value: body.firstname, min: 2, max: 12 },
                'Last name': { value: body.lastname, min: 2, max: 12 },
                'Email': { value: body.email, min: 5, max: 30 },
                'Association name': { value: body.association_name, min: 5, max: 50 }
            });

            const userData = await TaxiAssociationAdmin.insert({
                firstname: body.firstname,
                lastname: body.lastname,
                email: body.email,
                association_name: body.association_name,
                password: await hash('Password123')
            })

            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }

    static async sign_in (wrap_res, body) {
        try {
            const userDetails = await TaxiAssociationAdmin.getByEmail(body.email)

            v.validate({
                'Email address': { value: body.email, min: 7, max: 35 },
                'Password': { value: body.password, min: 8, max: 18 },
            });

            if (!userDetails)
                throw 'Password or email address is incorrect!';

            if (!await isSame(userDetails.password, body.password))
                throw 'Password or email address is incorrect!';

            delete userDetails.password;

            const tokens = jwt.get_cookie_tokens({ ...userDetails });
            wrap_res.set_cookie('tf_taa', tokens);

            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }

    static async getAll (wrap_res, _body) {
        try {
            wrap_res.users = await TaxiAssociationAdmin.getAll();

            wrap_res.successful = true;

            return wrap_res;
        } catch (err) { throw err; }
    }

    static async searchAll (wrap_res, body) {
        try {
            wrap_res.users = await TaxiAssociationAdmin.searchAll(body.searchValue);

            wrap_res.successful = true;

            return wrap_res;
        } catch (err) { throw err; }
    }
}