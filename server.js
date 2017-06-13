var express = require('express');
const app = express();
var fs = require("fs");
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:8000'
};

app.use(cors(corsOptions))

app.get('/menSubmenu', function (req, res) {
   fs.readFile( __dirname + "/app/json/" + "men_submenu.json", 'utf8', function (err, data) {
       console.log( data );
       res.setHeader('Access-Control-Allow-Credentials', true);
       res.end(data);
   });
});

app.get('/womenSubmenu', function (req, res) {
   fs.readFile( __dirname + "/app/json/" + "women_submenu.json", 'utf8', function (err, data) {
       console.log( data );
       res.setHeader('Access-Control-Allow-Credentials', true);
       res.end(data);
   });
});

app.get('/appliancesSubmenu', function (req, res) {
   fs.readFile( __dirname + "/app/json/" + "appliance_submenu.json", 'utf8', function (err, data) {
       console.log( data );
       res.setHeader('Access-Control-Allow-Credentials', true);
       res.end(data);
   });
});

app.get('/electronicsSubmenu', function (req, res) {
   fs.readFile( __dirname + "/app/json/" + "electronics_submenu.json", 'utf8', function (err, data) {
       console.log( data );
       res.setHeader('Access-Control-Allow-Credentials', true);
       res.end(data);
   });
});

app.get('/babymoreSubmenu', function (req, res) {
   fs.readFile( __dirname + "/app/json/" + "babymore_submenu.json", 'utf8', function (err, data) {
       console.log( data );
       res.setHeader('Access-Control-Allow-Credentials', true);
       res.end(data);
   });
});

app.get('/kidstoysSubmenu', function (req, res) {
   fs.readFile( __dirname + "/app/json/" + "kidstoys_submenu.json", 'utf8', function (err, data) {
       console.log( data );
       res.setHeader('Access-Control-Allow-Credentials', true);
       res.end(data);
   });
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})