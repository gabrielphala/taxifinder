class JWT {
    #jwt;

    constructor(jwt) {
        if (JWT.instance == null) {
            this.#jwt = jwt;

            JWT.instance = this;
        }

        return JWT.instance;

    };

    get_cookie_tokens(data) {
        return {
            jwtAccess: this.get_access_token(data),
            jwtRefresh: this.get_refresh_token(data)
        }
    }

    get_refresh_token = (data) => (
        this.#jwt.sign(data, process.env.JWT_REFRESH_TKN)
    );

    get_access_token = (data, expiresIn = '12h') => (
        this.#jwt.sign(data, process.env.JWT_ACC_TKN, { expiresIn })
    );

    verify = (token, callback) => {
        this.#jwt.verify(token, process.env.JWT_ACC_TKN, (err, data) => {
            callback(data);
        });
    };

    verify_refresh = (token, callback) => {
        this.#jwt.verify(token, process.env.JWT_REFRESH_TKN, (err, data) => {
            callback(data);
        });
    };
}

module.exports = new JWT(require('jsonwebtoken'));