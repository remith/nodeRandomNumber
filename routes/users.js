var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/randomGenerator', function(req, res, next) {
  // res.send('respond with a resource');
  randomGenerator(req.body).then(data => {
    res.send(responseGenerator(data.code, data.message, data.data));
  }).catch(error => {
    res.send(responseGenerator(error.code, error.message, error.data));
  });
});

function randomGenerator(){
  console.log('randomGenerator :');
  return new Promise((resolve, reject) => {
    try {
      var number =  Math.floor(Math.random() * Math.floor(200));
      resolve({ data: number });
      // return Math.randomGenerator();
    } catch (e) {
      reject({ data: e });
    }
  });
}

function responseGenerator(code, message, data = '') {
  var details = {
    "code": code,
    "message": message,
    "data": data
  };
  console.log(details);
  return details;
}

module.exports = router;
