const express = require('express');

const router = express.Router();

const Ingredient = require("./ingredient-model");

router.get('/:id/recipes', (req, res) => {
    Ingredient.getRecipes(req.params.id)
      .then(recipe => res.status(200).json(recipe))
      .catch(err => res.status(500).json({errorMessage: "Error fetching ingredient with id"}))
  });

  
module.exports = router;