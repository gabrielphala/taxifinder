const expressLoader = require('./express');
const middlewareLoader = require('./middleware');

module.exports = (app, router) => {
    middlewareLoader(app);
    expressLoader(app, router);
};
