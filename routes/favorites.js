var express = require('express');
var router = express.Router();
const passport = require('passport');

const favoritessCtrl = require('../controllers/favorites')

router.get('/', function(req, res, next) {
    res.render('favorites');
  });


  router.post('/:userId/favorites', favoritessCtrl.addToFavorites);
  router.get('/:userId/favorites', favoritessCtrl.getUserFavorites);
  

// router.get('/:id/favorites');

// router.delete('/:id/favorites/:id')


  module.exports = router;