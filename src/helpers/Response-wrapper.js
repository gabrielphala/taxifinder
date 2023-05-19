module.exports = async (callback, res) => {
    let response = {
        error: null,
        successful: false,
        cookie: {},

        set_cookie: (name, value) => {
            response.hasCookies = true;

            response.cookie.name = name;
            response.cookie.value = value;
        }
    };

    try {
        response = await callback(response);

        for (const key in res.locals.cookies_to_set) {
            if (res.locals.cookies_to_set.hasOwnProperty(key)) {
                res.cookie(key, res.locals.cookies_to_set[key]);
            }
        }

        if (response.hasCookies) {
            res.cookie(response.cookie.name, response.cookie.value);
        }
    } catch (e) {
        console.log(e);

        response.error = typeof e == 'object' ? 'Something went wrong, please try again later!' : e;
    }

    delete response.set_cookie

    res.status(200).json(response)
};
