const base_controller = require('../controllers/base');
const downloadService = require('../../services/Download');

module.exports = (router) => {
    router.post('/download/csv', base_controller.wrap(downloadService.download));
};