const User = require('../models/User')
const jwt = require("../helpers/Jwt");
const { hash, isSame } = require('../helpers/Hasher')

const v = require("../helpers/Validation")

module.exports = class UserService {
    static async sign_up (wrap_res, body) {
        try {
            v.validate({
                'First name': { value: body.firstname, min: 2, max: 12 },
                'Last name': { value: body.lastname, min: 2, max: 12 },
                'Email': { value: body.email, min: 5, max: 30 },
                'Password': { value: body.password, min: 8, max: 30 },
                'Confirmation password': { value: body.passwordAgain, min: 8, max: 30 },
            });

            if ((await User.exists({ email: body.email })).found)
                throw `Account with email: ${body.email} already exists`

            const userData = await User.insert({
                firstname: body.firstname,
                lastname: body.lastname,
                email: body.email,
                type: body.type,
                password: await hash(body.password)
            })

            delete userData.password;

            const tokens = jwt.get_cookie_tokens({...userData});
            wrap_res.set_cookie('tf_user', tokens);

            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }

    static async sign_in (wrap_res, body) {
        try {
            const userDetails = await User.getByEmail(body.email)

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
            wrap_res.set_cookie('tf_user', tokens);

            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }

    static async getAllDrivers (wrap_res, _body) {
        try {
            wrap_res.users = await User.getAllDrivers();

            wrap_res.successful = true;

            return wrap_res;
        } catch (err) { throw err; }
    }

    static async searchDrivers (wrap_res, body) {
        try {
            wrap_res.users = await User.searchDrivers(body.searchValue);

            wrap_res.successful = true;

            return wrap_res;
        } catch (err) { throw err; }
    }

    static async getAllPassengers (wrap_res, _body) {
        try {
            wrap_res.users = await User.getAllPassengers();

            wrap_res.successful = true;

            return wrap_res;
        } catch (err) { throw err; }
    }

    static async searchPassengers (wrap_res, body) {
        try {
            wrap_res.users = await User.searchPassengers(body.searchValue);

            wrap_res.successful = true;

            return wrap_res;
        } catch (err) { throw err; }
    }
}