const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: String,
    summary: String,
    img: String,
    servingSize: Number,
    prepTime: String,
    cookTime: String,
    ingredients: String,
    instructions: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);