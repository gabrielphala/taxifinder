const base_controller = require('../controllers/base');
const taxi_service = require('../../services/Taxi')

const { anyFiles } = require('../../config/multer');

module.exports = (router) => {
    router.post('/taxi/add', base_controller.wrap_with_store(taxi_service.add));
    router.post('/taxi/get', base_controller.wrap_with_store(taxi_service.get));
    router.post('/taxi/remove', base_controller.wrap_with_store(taxi_service.delete));

    router.post(
        '/taxi/change-profile',
        (req, res, next) => {
            anyFiles('./public/assets/uploads/profile/taxi')(req, res, async (err) => {
                req.res_wrap = await taxi_service.changeProfile(
                    base_controller.res_wrap,
                    req.body,
                    req
                )

                next()
            })
        },
        base_controller.wrap_with_request((res_wrap, _, req) => {
            return { ...res_wrap, ...req.res_wrap }
        })
    );
};