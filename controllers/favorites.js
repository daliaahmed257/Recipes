const User = require('../models/user');
const Recipe = require('../models/recipe');


const addToFavorites = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);

  const user = await User.findById(req.params.id)

  user.favorites.push(req.body.recipe)
  try {
    await user.save();
  } catch (err) {
    console.log(err);
}
res.redirect(`/${user._id}/favorites`)
};

const getUserFavorites = async (req, res) => {
    const userId = req.params.userId;

    // Find the user by ID
    const user = await User.findById(userId).populate('recipe')

    res.render('recipes/favorites', {user: user})
  };

module.exports = {
  addToFavorites,
  getUserFavorites
};

