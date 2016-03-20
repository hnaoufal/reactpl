var mongoose = require ('mongoose');

var TruckItemSchema = {
	name:String,
	rented: Boolean,
	id: String
};

var TruckItem = mongoose.model('TruckItem',TruckItemSchema,"truckitems");

module.exports = TruckItem;
