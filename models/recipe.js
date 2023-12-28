const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const recipeSchema = new Schema({
    title: String,
    summary: String,
    img: String,
    servingSize: Number,
    prepTime: String,
    cookTime: String,
    ingredients: String,
    instructions: String,
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);