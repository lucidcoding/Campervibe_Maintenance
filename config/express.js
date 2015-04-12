var express = require('express');

module.exports = function() {
    var app = express();
    require('../app/routes/vehicle.server.routes.js')(app);
    return app;
};