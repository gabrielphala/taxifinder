const Taxi = require('../models/Taxi')

module.exports = class TaxiService {
    static addTaxi (body, photo, driver_id) {
        try {
            Taxi.insert({
                make: body.make,
                model: body.model,
                seats: body.seats,
                licence: body.licence,
                photo,
                driver_id
            })
        } catch (e) { throw e; }
    }

    static updateTaxi (body, photo, driver_id) {
        try {
            Taxi.updateByDriver(driver_id, {
                make: body.make,
                model: body.model,
                seats: body.seats,
                licence: body.licence,
                photo,
                driver_id
            })
        } catch (e) { throw e; }
    }

    static async add (wrap_res, body, { user_info }) {
        try {
            if (!(await Taxi.exists({ driver_id: user_info.id, is_deleted: false })).found)
                TaxiService.addTaxi(body, null, user_info.id)
            
            else 
                TaxiService.updateTaxi(body, null, user_info.id)
            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }

    static async delete (wrap_res, body, { user_info }) {
        try {
            const taxiDetails = await Taxi.getByDriver(user_info.id)

            if (!taxiDetails) throw 'Could not delete taxi'

            Taxi.remove(taxiDetails.id)

            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }

    static async get (wrap_res, body, { user_info }) {
        try {
            const taxi = await Taxi.getByDriver(user_info.id);

            wrap_res.taxi = taxi ? taxi.toObject() : {};

            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }
}