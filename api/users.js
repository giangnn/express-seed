var express = require('express');
var router = express.Router();

var data = [
  {
    id: 1,
    name: 'Barrack Obama',
    yob: 1961
  },
  {
    id: 2,
    name: 'John McCain',
    yob: 1936
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;
