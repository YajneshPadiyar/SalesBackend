var express = require('express');
var router = express.Router();

var AWS = require('aws-sdk');
AWS.config.update(
  {
    region: 'us-west-2',
    accessKeyId: 'fakeMyKeyId',
    secretAccessKey: 'fakeSecretAccessKey',
    endpoint: 'http://localhost:8001',
    sslEnabled:     false,
    maxRetries:     5
  });

// Create the DynamoDB service object
var DynamoDB = new AWS.DynamoDB({apiVersion: '2012-10-08'});
var docClient = new AWS.DynamoDB.DocumentClient();

/* GET home page. */
router.get('/app', function(req, res, next) {
  res.send('index');
});

router.get('/ddb/listTables', function(req, res, next) {
  DynamoDB.listTables({}, function(err, res) {console.log(res);});
});
router.get('/ddb/deleteTable',function(req, res, next) {
  var params = {
  TableName: "Movies002"
};
  // Call DynamoDB to delete the specified table
DynamoDB.deleteTable(params, function(err, data) {

  if (err && err.code === 'ResourceNotFoundException') {
    console.log("Error: Table not found");
  } else if (err && err.code === 'ResourceInUseException') {
    console.log("Error: Table in use");
  } else {
    console.log("Success", data);
  }
});
res.send("Table Deleted");
});
router.get('/ddb/addRecord', function(req, res, next) {
  var params = {
      TableName:"Movies002",
      Item:{
          "year": 2015,
          "title": "The Big New Movie",
          "info":{
              "plot": "Nothing happens at all.",
              "rating": 0
          }
      }
  };
  console.log("Adding a new item...");
  docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
  });
  res.send('Record Addition successfull');
});


router.get('/ddb/createTable', function(req, res, next) {
  var params = {
    TableName : "Movies002",
    KeySchema: [
        { AttributeName: "year", KeyType: "HASH"},  //Partition key
        { AttributeName: "title", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [
        { AttributeName: "year", AttributeType: "N" },
        { AttributeName: "title", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

  DynamoDB.createTable(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Table.KeySchema);
    }
  });
  res.send('index');
});

module.exports = router;
