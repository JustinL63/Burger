var connection = require("../config/connection.js");

selectAll();
insertOne();
updateOne();

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },

    all: function(tableInput, cb) {
        
    }
}

module.exports = orm;