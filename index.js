var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var dogs = require('./dogs');


var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));


app.get('/dogs', function (req, res){
res.send(dogs);

});

app.post('/dogs', function (req, res){
req.body.key = dogs[dogs.length-1].key+1;
dogs.push(req.body);
res.send(dogs);
});

app.put('/dogs/:id', function(req, res){
  for (var i = 0; i < dogs.length; i++) {
    if(dogs[i].key ==req.params.id){
      dogs[i] = req.body;
    }
  }
  res.send(dogs);
});

app.delete('/dogs/:id', function(req,res){
  for (var i = 0; i < dogs.length; i++) {
    if(dogs[i].key ==req.params.id){
      dogs.splice(i,1);
    }
  }
  res.send(dogs);
});





app.listen(7000, function(){
  console.log("listening to 7000");

});
