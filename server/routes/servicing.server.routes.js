var servicing = require('../controllers/servicing.server.controller');

module.exports = function (app) {
    app.route('/servicing')
        .post(servicing.create)
        .get(servicing.list);

    //app.route('/servicing/:servicingId')
    //    .get(servicing.read);

    app.route('/servicing/:servicingId')
        .get(servicing.read)
        .put(servicing.update)
        .delete(servicing.delete);

    app.param('servicingId', servicing.servicingById);
};