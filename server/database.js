var mongoose = require('mongoose');
var TruckItem = require('./models/TruckItem.js');

mongoose.connect('mongodb://localhost/truck',function(){
	console.log("connected");

	mongoose.connection.db.dropDatabase();

	var items = [{
	name: "Truck X-C32"
},{
	name: "Truck B-32"
},{
	name: "Truck D-K2",
	rented: true
},{
	name: "Truck A-11"
}];

items.forEach(function(item){
	new TruckItem(item).save();
});

});
