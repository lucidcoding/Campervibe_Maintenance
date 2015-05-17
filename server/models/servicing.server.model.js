var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ServicingSchema = new Schema({
    vehicleId: {
        type: String
    },
    checkInTime: {
        type: Date,
        //default: Date.now
    },
    checkOutTime: {
        type: String
    },
    mileage: {
        type: Number
    },
    notes: {
        type: String
    }
});

mongoose.model('Servicing', ServicingSchema);