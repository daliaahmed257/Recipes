var express = require('express');
var router = express.Router();
const passport = require('passport');

const favoritesCtrl = require('../controllers/favorites')

router.get('/favorites', function(req, res, next) {
  console.log(req.user);
    res.render('recipes/favorites', { userId: req.user._id });
  });


   router.post('/favorites', favoritesCtrl.addToFavorites);
   router.get('/:userId/favorites', favoritesCtrl.getUserFavorites);

  module.exports = router;