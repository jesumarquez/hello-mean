var express = require('express'),
    app = express();

//routes
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

//#statics
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/scripts', express.static(__dirname + '/public/scripts'));

//listen
app.listen(process.env.PORT, process.env.IP, null, function(){
    console.log('server is running... ');
});