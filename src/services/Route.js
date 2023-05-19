const Route = require('../models/Route');

const { getDistance } = require('../helpers/Distance')

module.exports = class RouteService {
    static async add (wrap_res, body, { taxi_association_admin_info }) {
        try {
            if (body.starting_address.trim() == '')
                throw 'Starting location has not been selected';

            else if (body.dest_address.trim() == '')
                throw 'Destination location has not been selected';

            if (!body.starting_coords)
                throw 'Starting coordinates are not available';

            else if (!body.dest_coords)
                throw 'Destination coordinates are not available';

            const start_coords = body.starting_coords.split(',');
            const dest_coords = body.dest_coords.split(',');

            const distance = getDistance(
                { lat: start_coords[0], lng: start_coords[1] }, { lat: dest_coords[0], lng: dest_coords[1] }
            );

            Route.insert({
                starting_address: body.starting_address,
                dest_address: body.dest_address,
                taxi_association_admin_id: taxi_association_admin_info.id,
                distance,
                fare: distance * 1.1,
            });

            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }

    static async searchByAddresses (wrap_res, body) {
        try {
            wrap_res.routes = await Route.searchByAddresses(body.starting_address, body.dest_address);
            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }

    static async getForAdmin (wrap_res, _body) {
        try {
            wrap_res.routes = await Route.getForAdmin();
            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }

    static async getForAssociation (wrap_res, _body, { taxi_association_admin_info }) {
        try {
            wrap_res.routes = await Route.getForAssociation(taxi_association_admin_info.id);
            wrap_res.successful = true;

            return wrap_res;
        } catch (e) { throw e; }
    }
}