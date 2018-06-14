var AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});

// Create the DynamoDB service object
var DynamoDB = new AWS.DynamoDB({apiVersion: '2012-10-08'});

(params) => XcreateTable({
  // Call DynamoDB to create the table
  DynamoDB.createTable(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Table.KeySchema);
    }
  });
});

module.exports = DynamoDB;
