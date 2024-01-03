var express = require('express');
var router = express.Router();
const passport = require('passport');

const favoritesCtrl = require('../controllers/favorites')

router.get('/favorites', function(req, res, next) {
    res.render('recipes/favorites', { userId: req.user._id });
  });


   router.post('/favorites/:recipeId', favoritesCtrl.addToFavorites);
 

  module.exports = router;