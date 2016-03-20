module.exports = function (app){

	var TruckItem = require('./../models/TruckItem.js');

	app.route('/api/items')
.get(function(req,res){
	TruckItem.find(function(error,doc){
	res.send(doc);
	});
})
.post(function(req,res){
	var item = req.body;
	//items.push(item);
	var truckItem = new TruckItem(item);
	truckItem.save(function(err, data){
		res.status(300).send();
	});
});

app.route('api/items/:id')
.delete(function(req,res){
	TruckItem.find({
		_id: req.params.id
	}).remove();
})
.patch(function(req,res){
	TruckItem.findOne({
		_id: req.body._id

	}, function(error, doc){
		for (var key in req.body){
			doc[key]=req.body[key];
	}
	doc.save();
	res.status(200).send();
});
});
};

