var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require("body-parser");

//#statics
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/scripts', express.static(__dirname + '/public/scripts'));
app.use(bodyParser());

//mongose
//mongoose.connect('mongodb://MongoLabHigoDB:j2VCCXt1U4CLcGPECw1.fxJTp.Wr2IfdcD_l9SDsLys-@ds036698.mongolab.com:36698/MongoLabHigoDB');
mongoose.connect('mongodb://higo:Higo$2015@ds034208.mongolab.com:34208/mongolabtestdb');

//Customer Model
var Customer = mongoose.model('Customer', {
    firstName : String, lastName : String
});

//routes
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

//api
app.post('/api/customer',  function(req, res){
  var customer = new Customer(req.body);
  customer.save(function(err, result){
      res.json(result);
  });
});

app.get('/api/customer', function(req, res) {
    Customer.find({}, function(err, result){
        res.json(result);
    })
})

//listen
app.listen(process.env.PORT, process.env.IP, null, function(){
    console.log('server is running... ');
});