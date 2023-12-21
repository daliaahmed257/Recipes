const Recipe = require('../models/recipe')

const index = async (req, res) => {
    let recipes = await Recipe.find({});
    res.render('recipes/index', {recipes})
}

const show = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    res.render('recipes/show', {recipe})
}

module.exports = {
    index,
    show
}

