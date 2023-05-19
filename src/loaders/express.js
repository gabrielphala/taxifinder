const path = require('path');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const databseConfig = require('../config/database')

module.exports = (app, router) => {
    app.set('view engine', 'ejs');
    app.set('views', path.resolve(`${__dirname}/../views`));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(expressLayouts);

    app.use(router);

    const routes = require('../api/routes');

    routes(router);
};
