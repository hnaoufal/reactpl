var express = require('express'),
	ejs = require('ejs'),
	app = new express(),
	parser = require('body-parser');

app.set('view engine','ejs');
app.get('/', function(req,res){
	res.render('./../app/index.ejs',{});
})
.use(express.static(__dirname + '/../.tmp'))
.listen(7778);

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

require('./routes/items.js')(app);
