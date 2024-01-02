const User = require('../models/user');
const Recipe = require('../models/recipe');

const addToFavorites = async (req, res) => {
  try {

    console.log('Received request to add to favorites:', req.params.userId, req.body.recipeId);
    const userId = req.params.userId;
    const recipeIdToAdd = req.body.recipeId

    // Find the user by ID
    const user = await User.findById(userId);

    // Find the recipe by ID
    const recipe = await Recipe.findById(recipeIdToAdd);

    // Add the recipe to favorites
    user.favorites.push(recipeIdToAdd);

    // Save the user with the updated favorites list
    await user.save();

    return res.status(201).json({ message: 'Recipe added to favorites successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
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
