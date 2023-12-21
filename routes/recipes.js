const express = require('express');
const router = express.Router();

const recipesCtrl = require('../controllers/recipes')

router.get('/', recipesCtrl.index);


// router.get('/', function(req, res, next) {
//     res.render('recipes', { title: 'The Soup Pot' });
//   });

module.exports = router;
