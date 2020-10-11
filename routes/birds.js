var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('birds', { title: 'Express' });
});

router.get('/create', function(req, res, next) {
    res.render('create', { title: 'Create' });
});

router.get('/confirm', function(req, res, next) {
    res.render('confirm', { title: 'Confirm' });
});

router.post('/create', function(req, res, next) {    
    let newBird = {
        Species: req.body.species,
        Nickname: req.body.nickname,
        Status: req.body.status
    }
    console.log(newBird);
    res.redirect('./confirm');
});

module.exports = router;
