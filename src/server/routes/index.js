const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  indexController.sum(1, 2, (error, results) => {
    if (error) return next(error);
    if (results) {
      res.json({
        sum: results
      });
    }
  });
});

module.exports = router;
