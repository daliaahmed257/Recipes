const Recipe = require('../models/recipe')

const index = async (req, res) => {
    let recipes = await Recipe.find({});
    res.render('recipes/index', {recipes})
}

module.exports = {
    index,
}

