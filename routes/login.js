var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST login listing. */
router.post('/token', function(req, res, next) {
  console.log(req);
  var loginRes = {
    status: 'Success',
    token: 'RandomToken',
    K: req.body
  };

  res.send(loginRes);
});

module.exports = router;
