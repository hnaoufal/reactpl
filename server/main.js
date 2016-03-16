var express = require('express'),
	ejs = require('ejs'),
	app = new express();

app.set('view engine','ejs');
app.get('/', function(req,res){
	res.render('./../app/index.ejs',{});
})
.use(express.static(__dirname + '/../.tmp'))
.listen(7778);
