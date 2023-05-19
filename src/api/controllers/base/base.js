module.exports = (class BaseController {
    constructor(wrap) {
        this.res_wrap = wrap;
    }

    render = (path, title) => (req, res) => {
        res.render(path, {
            page: {
                title
            },
            query: req.query
        });
    };

    sign_out = (req, res) => {
        res.clearCookie('_user')
        
        if (req.store && req.store.user_info && req.store.user_info.type == 'driver')
            return res.redirect('/driver/sign-in');
            
        return res.redirect('/sign-in')
    }

    wrap = (service_method) => (req, res) => {
        this.res_wrap(async (response) => {
            return await service_method(response, req.body)
        }, res)
    }

    wrap_with_store = (service_method) => (req, res) => {
        this.res_wrap(async (response) => {
            return await service_method(response, req.body, req.store || {})
        }, res)
    }

    wrap_with_request = (service_method) => (req, res) => {
        this.res_wrap(async (response) => {
            return await service_method(response, req.body, req || {})
        }, res)
    }
});