var express = require('express'),
    app = express();

//routes
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

//listen
app.listen(process.env.PORT, process.env.IP, null, function(){
    console.log('server is running... ');
});