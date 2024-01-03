const User = require('../models/user');
const Recipe = require('../models/recipe');


const addToFavorites = async (req, res) => {
const recipeId = req.params.recipeId;
  const user = await User.findById(req.user._id)
  const recipe = await Recipe.findById(recipeId);
  user.favorites.push(recipeId)

  try {
    await user.save();
  } catch (err) {
    console.log(err);
}
res.redirect(`/user/${user._id}/favorites`)
};

const getUserFavorites = async (req, res) => {
  const userId = req.params.userId;
  try {
      const user = await User.findById(userId).populate('favorites');
      res.render('recipes/favorites', { user: user });
  } catch (error) {
      res.status(500).send('Server error');
  }
};

module.exports = {
  addToFavorites,
  getUserFavorites
};

