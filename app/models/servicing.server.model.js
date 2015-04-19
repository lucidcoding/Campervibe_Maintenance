var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ServicingSchema = new Schema({
    vehicleId: String,
    checkInTime: String,
    checkOutTime: String,
    notes: String
});

mongoose.model('Servicing', ServicingSchema);