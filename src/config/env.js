const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    mode: process.env.NODE_ENV,
    port: process.env.PORT,
    databaseURL: process.env.DATABASE_URL,
};
