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
app.get('/json', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "michelle.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.send(data);
         });
  });
app.get('/', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "michelle.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "michellebarker.html");
         });
  });
  
  app.get('/fnav', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "michelle.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "fnav/f_nav.html");
         });
  });
  app.get('/fmg', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "michelle.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "fmg/mg.html");
         });
  });
  app.get('/fver', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "michelle.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "fver/a18h.html");
         });
  });
  app.get('/ng5', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "michelle.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "ng51/index.html");
         });
  });
  app.get('/coupons', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "michelle.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "coupons/carousel10.html");
         });
  });
  app.get('/lotto', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "michelle.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "lotto/lottoexh.html");
         });
  });
  app.get('/converter', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "michelle.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "converter/converh.html");
         });
  });
  app.get('/telaviv', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "michelle.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "telaviv/qzbs.html");
         });
  });
  app.get('/tiny', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "michelle.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "tiny/jqm1.html");
         });
  });
  app.get('/quiz', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "michelle.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "quiz/qzbs.html");
         });
  });
  app.get('/expenses', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "michelle.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "expenses/aexh.html");
         });
  });
  app.get('/humusiot', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "michelle.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "humusiot/a17var.html");
         });
  });
  app.get('/backbone', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "michelle.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "backbone/a01.html");
         });
  });
  app.get('/clarissa1', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "clarissa/a4.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "clarissa/a11.html");
         });
  });
  app.get('/clarissa2', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "clarissa/a4.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "clarissa/a12.html");
         });
  });
  app.get('/saradrasner', function(req, res)
  {
      console.log('from get/json');
      fs.readFile(__dirname + "/public/" + "clarissa/a4.json",  "utf8",
        function(err, data)
         {
           if (err) { console.log(err.toString()); }
            console.log( data );
            // res.end( data );
            res.sendFile(__dirname + "/public/" + "saradrasner/a11.html");
         });
  });
app.post('/add11', urlen , function (req, res)
  {
    var apath = __dirname + "/public/" + "michelle.json";
      console.log('add11;at first readFile(json)');
     fs.readFile(apath,  "utf8", function(err, data)
        {  
            if(err) { console.log(err.toString()); }
           console.log(data );
           let amichelle = JSON.parse(data).michelle;
           let response = {
               name: req.body.name,
               sentence: req.body.sentence
             };
           console.log("object of res:");
           console.log(response);
           apeople.push(response);
           // console.log(apeople);
           let aobj = { michelle: amichelle };
           let ajson = JSON.stringify(aobj);
             fs.writeFile(apath, ajson, function(err) {
               if(err) { return console.log(err.toString()); }
               console.log('people.json rewritten succesfully:');
               console.log(ajson);
             });
            // res.end();
              res.sendFile(__dirname + "/public/" + "michellebarker.html");
         });
    });

module.exports = app;
