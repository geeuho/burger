
var connection = require("./connection.js");

var orm = {
  selectAll: function(table, cb) {
    var queryString = "Select * FROM " + tableInput + ";";
    connection.query (queryString, function(err, result){
      if (err){
        throw err;
      }
      cb(result);
    });
  },
  //need to find out what variables need to be inserted
  insertOne: function(table, lemonade, cb){
    var queryString = "INSERT INTO " + table + " SET ?";

    console.log(queryString);

    connection.query(queryString, [{lemonade_name: lemonade, devoured: false}],
      function(err, result){
        if (err){
          throw err;
        }
        cb(result);
    });
  },
    //need to find out what we need to update
    updateOne: function(table, idNum, cb){
    var queryString = "UPDATE " + table + " SET ? WHERE ?";

    console.log(queryString);

    connection.query(queryString, [{devoured: true}, {id: idNum}],
      function(err, results){
        if (err){
          throw err;
        }
        cb(result);
    });
  }
};

module.exports = orm;