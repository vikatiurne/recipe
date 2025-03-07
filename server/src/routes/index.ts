const Router = require("express");
const router = new Router();

import recipeRouter from "../Recipes/recipes-router";

router.use("/recipe", recipeRouter);

export default router;
