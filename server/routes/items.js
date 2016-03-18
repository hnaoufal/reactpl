module.exports = function (app){
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

app.route('/api/items')
.get(function(req,res){
	res.send(items);
});
};

