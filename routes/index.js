var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "About me" });
});

/* GET Origin page. */
router.get('/origin', function(req, res) {
  res.render('pages/origin', { title: "Origin" });
});

/* GET Portfolio page. */
router.get('/portfolio', function(req, res) {
  res.render('pages/portfolio', { title: "Portfolio" });
});

/* GET Profession page. */
router.get('/profession', function(req, res) {
  res.render('pages/profession', { title: "Profession" });
});

/* GET Exquisite experience page. */
router.get('/experience', function(req, res) {
  res.render('pages/experience', { title: "Exquisite experience" });
});

module.exports = router;
