const Utility = require("./Utility")

module.exports = class Connection {
    constructor () {
        if (!Connection.instance) {
            Connection.instance = this;
        }

        return Connection.instance;
    }

    createConnection (host, user, password, mysql) {
        this.conn = mysql.createConnection({
            host,
            user,
            password
        });
    }

    init (query, responseHandler) {
        this.conn.connect((err) => {
            Utility.exitOnError(err)

            this.conn.query(query, responseHandler)
        })
    }

    createDatabase (name) {
        this.dnName = name;

        this.init(`CREATE DATABASE IF NOT EXISTS ${name};`, (err, res) => {
            Utility.exitOnError(err)
        })

        this.conn.changeUser({ database: name }, function (err) {
            Utility.exitOnError(err)
        });
    }
}