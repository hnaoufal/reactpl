var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/truck',function(){
	console.log("connected");
});
