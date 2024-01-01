const User = require('../models/user');
const Recipe = require('../models/recipe');

const addToFavorites = async (req, res) => {
  try {
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
    try {
      const userId = req.params.userId;
  
      // Find the user by ID
      const user = await User.findById(userId).populate('favorites');
  
      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }
  
      // Extract the favorite recipes from the user object
      const favoriteRecipes = user.favorites;
  
      return res.status(200).json({ favoriteRecipes });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = {
  addToFavorites,
  getUserFavorites
};
