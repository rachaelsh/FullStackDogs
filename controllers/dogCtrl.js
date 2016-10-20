var mongojs = require("mongojs");
var ObjectId = require("mongodb").ObjectId;


var db = mongojs("dogdb", ['dogs']);


  module.exports = {
    read: function(req, res){
      db.dogs.find({}, function(err, result){
        if(err){
          res.send(err);
        }else{
          res.send(result);
        }
    });
  },

  create: function(req, res){
    db.dogs.insert(req.body, function(err, result){
      // if(err){
      //   res.send(err);
      // }else{
        res.send(result);
      // }
    });
  },
  update: function(req, res) {
    var updateObj = {
      query: {_id: ObjectId(req.params.id)},
      update: {$set: req.body},
      new: false
    };
    db.dogs.findAndModify(newObj, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },

  delete: function(req, res) {
    db.dogs.remove({_id: ObjectId(req.params.id)}, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    });
  }
};
