var express = require('express');
var ejs = require('ejs');
var app = express();
var router = express.Router();
//using html instead of .ejs
app.engine('.html', ejs.__express);

// this aviods having to provide the extension to res.render()
app.set('view engine', 'html');
//set the folder where the pages are kept.
app.set('views', __dirname + '/views');

//pass some data to page.
var message = [
 {name : 'Mary', message : 'This is Mary.'},
 {name : 'Gigi', message : 'This is Gigi.'},
 {name : 'Coco', message : 'This is Coco.'}
];
//Serve the index page.
app.get('/',function(req, res){
  res.render('index',{
  	pageTitle: 'EJS Demo',
  	message : message
  });
});

app.get('/about',function(req, res){
  res.render('about');
});

if(!module.parent){
	app.listen(8080);
	console.log('EJS Demo server started on port 8080.');
}