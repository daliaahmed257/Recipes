const User = require('../models/user');
const Recipe = require('../models/recipe');


const addToFavorites = async (req, res) => {
const recipe = await Recipe.findById(req.params.id);
  const user = await User.findById(req.user._id)
  console.log(req.body.recipeId)
  user.favorites.push(req.body.recipeId)
  try {
    await user.save();
  } catch (err) {
    console.log(err);
}
res.redirect(`/user/${user._id}/favorites`)
};

const getUserFavorites = async (req, res) => {
    const userId = req.params.userId;

    const user = await User.findById(userId).populate('favorites')
    console.log(user)
    res.render('recipes/favorites', {user: user})
  };

module.exports = {
  addToFavorites,
  getUserFavorites
};

