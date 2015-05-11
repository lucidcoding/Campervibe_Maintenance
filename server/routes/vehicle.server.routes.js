module.exports = function (app) {
    var vehicle = require('../controllers/vehicle.server.controller');
    app.get('/vehicle', vehicle.render);
};