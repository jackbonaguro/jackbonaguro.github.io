const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  fs.readFile('index.html', (err, data) => {
    res.send(data);
  });
});

module.exports = router;
