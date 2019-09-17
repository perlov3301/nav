// https://sentences-perlov3301.c9users.io/list
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var bodyp = require('body-parser');
// create application/x-www-form-urlencoded parser
var urlen = bodyp.urlencoded({ extended: false });
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// just here
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res)
  {
      console.log('from get/');
      fs.readFile(__dirname + "/public/" + "people.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.send(data);
         });
  });
app.get('/list', function(req, res)
  {
      console.log('from get/list');
      fs.readFile(__dirname + "/public/" + "people.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "a42.html");
         });
  });
app.post('/add11', urlen , function (req, res)
  {
      console.log('add1 here');
     var apath = __dirname + "/public/" + "people.json";
     fs.readFile(apath,  "utf8", function(err, data)
        {  
            if(err) { console.log(err.toString()); }
            // console.log(data );
           let apeople = JSON.parse(data).people;
           let response = {
               name: req.body.name,
               sentence: req.body.sentence
             };
           console.log("object of res:");
           console.log(response);
           apeople.push(response);
           // console.log(apeople);
           let aobj = { people: apeople };
           let ajson = JSON.stringify(aobj);
             fs.writeFile(apath, ajson, function(err) {
               if(err) { return console.log(err.toString()); }
               console.log('people.json rewritten succesfully:');
               console.log(ajson);
             });
            // res.end();
              res.sendFile(__dirname + "/public/" + "a42.html");
         });
    });

module.exports = app;
