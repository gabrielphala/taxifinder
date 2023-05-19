class Hasher {
    constructor (engine) {
        if (Hasher.instance == null) {
            this._engine = engine;

            Hasher.instance = this;
        }

        return Hasher.instance;
    }

    hash = (str) => {
        return new Promise((resolve, reject) => {
            this._engine.genSalt(10, (err, salt) => {
                if (err) {
                    reject('Something went wrong, try again later');

                    return;
                }

                this._engine.hash(str, salt, (err, hash) => {
                    if (err) {
                        reject('Something went wrong, try again later');

                        return;
                    }

                    resolve(hash);
                });
            });
        });
    }

    isSame = (hash, plain) => {
        return new Promise((resolve, reject) => {
            this._engine.compare(plain, hash, (err, results) => {
                if (err) {
                    reject('Something went wrong, try again later');

                    return;
                }

                resolve(results);
            });
        });
    }
};

module.exports = new Hasher(require('bcryptjs'));