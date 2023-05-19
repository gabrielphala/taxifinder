const { loadUserInfo, loadTaxiAssociationAdminInfo, loadPageDetails } = require('../middleware');

const cookieParser = require('cookie-parser');

module.exports = (app) => {
    app.use(cookieParser());
    app.use(loadUserInfo);
    app.use(loadTaxiAssociationAdminInfo);
    app.use(loadPageDetails);
};