const express = require("express");

const recipeRouter = require("./recipes/recipes-router");

const ingredientsRouter = require('./recipes/ingredient-router');

const server = express();
server.use(express.json());

server.use("/api/recipes", recipeRouter);

server.use('/api/ingredients', ingredientsRouter);
server.get("/", (req, res) => {
    res.status(200).json({message: "server running"})
})

module.exports = server