var Servicing = require('mongoose').model('Servicing');

exports.create = function(req, res, next) {
    var servicing = new Servicing(req.body);

    servicing.save(function(err) {
        if(err) {
            return next (err);
        } else {
            res.json(servicing);
        }
    });
};

exports.checkIn = function(req, res, next) {
    var servicing = new Servicing();
    servicing.vehicleId = req.body.vehicleId;
    servicing.checkInTime = Date.now;
    servicing.mileage = req.body.mileage;

    servicing.save(function(err) {
        if(err) {
            return next (err);
        } else {
            res.json(servicing);
        }
    });
};

exports.list = function(req, res, next) {
    Servicing.find({}, function (err, servicings) {
        if(err) {
            return next(err);
        } else {
            res.json(servicings);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.servicing);
};

exports.servicingById = function(req, res, next, id) {
    Servicing.findOne({
        _id: id
    }, function (err, servicing) {
        if(err) {
            return next(err);
        } else {
            req.servicing = servicing;
            next();
        }
    });
};

exports.update = function(req, res, next) {
    Servicing.findByIdAndUpdate(req.servicing.id, req.body, function(err, servicing) {
        if(err) {
            return next(err);
        } else {
            res.json(servicing);
        }
    });
};

exports.delete = function(req, res, next) {
    req.servicing.remove(function(err) {
        if(err) {
            return next(err);
        } else {
            res.json(servicing);
        }
    });
};