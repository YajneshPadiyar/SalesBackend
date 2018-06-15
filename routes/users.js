var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/customer', function(req, res, next) {
  console.log(req);

  const list = [
      {Key:"1", CustomerName: "Test Name 1", TradingName: "Trading Name 1"},
      {Key:"2", CustomerName: "Test Name 2", TradingName: "Trading Name 2"},
      {Key:"3", CustomerName: "Test Name 3", TradingName: "Trading Name 3"},
      {Key:"4", CustomerName: "Test Name 4", TradingName: "Trading Name 4"},
      {Key:"5", CustomerName: "Test Name 5", TradingName: "Trading Name 5"},
      {Key:"6", CustomerName: "Test Name 6", TradingName: "Trading Name 6"},
      {Key:"7", CustomerName: "Test Name 7", TradingName: "Trading Name 7"},
      {Key:"8", CustomerName: "Test Name 8", TradingName: "Trading Name 8"},
      {Key:"9", CustomerName: "Test Name 9", TradingName: "Trading Name 9"},
      {Key:"10", CustomerName: "Test Name 10", TradingName: "Trading Name 10"},
      {Key:"11", CustomerName: "Test Name 10", TradingName: "Trading Name 11"},
      {Key:"12", CustomerName: "Test Name 10", TradingName: "Trading Name 12"},
      {Key:"13", CustomerName: "Test Name 10", TradingName: "Trading Name 13"},
      {Key:"14", CustomerName: "Test Name 10", TradingName: "Trading Name 14"},
      {Key:"15", CustomerName: "Test Name 10", TradingName: "Trading Name 15"},
      {Key:"16", CustomerName: "Test Name 10", TradingName: "Trading Name 16"},
      {Key:"17", CustomerName: "Test Name 10", TradingName: "Trading Name 17"},
      {Key:"18", CustomerName: "Test Name 10", TradingName: "Trading Name 18"},
      {Key:"19", CustomerName: "Test Name 10", TradingName: "Trading Name 19"},
      {Key:"20", CustomerName: "Test Name 10", TradingName: "Trading Name 20"},
    ];

    const customerList = {CustomerList: list, status: true};

  res.send(customerList);
});


module.exports = router;
