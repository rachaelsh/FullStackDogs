var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var dogCtrl = require('./controllers/dogCtrl');


var app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));
app.use(mongoose)

app.get("/dogs", dogCtrl.read);
app.post("/dogs", dogCtrl.create);
app.put("/dogs/:id", dogCtrl.update);
app.delete("/dogs/:id", dogCtrl.delete);


mongoose.connect("mongodb://localhost:27017/dogs");
mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});
app.listen(7000, function(){
  console.log("listening to 7000");
});
