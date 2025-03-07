import recipesController from "./recipes-controller";

const { Router } = require("express");


const router = new Router();

router.get("/getAllRecipes", recipesController.getAllRecipes );
router.get("/getRecipesByIngredient",recipesController.getRecipesByIngredient );
router.get("/getRecipesByCountry",recipesController.getRecipesByCountry );
router.get("/getRecipesByCategory",recipesController.getRecipesByCategory );
router.get("/getOne/:id", recipesController.getRecipesById);

export default router;