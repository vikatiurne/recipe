import { Request, Response, NextFunction } from "express";
import ApiErrors from "../Errors/ApiError";
import RecipesService from "./recipes-service";
import handleServiceError from "../Errors/ErrorMiddleware";

class RecipesController {
  private readonly recipesService: RecipesService;

  constructor() {
    this.recipesService = new RecipesService();
  }
  getAllRecipes = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const recipes = await this.recipesService.getAllRecipes();
      return res.status(200).json(recipes);
    } catch (error: unknown) {
      handleServiceError(error, next);
    }
  };

  getRecipesByIngredient = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const ingredient = req.query.ingredient as string | undefined;

    if (typeof ingredient === "string") {
      try {
        const recipes = await this.recipesService.getRecipesByIngredient(
          ingredient
        );
        return res.status(200).json(recipes);
      } catch (error: unknown) {
        handleServiceError(error, next);
      }
    } else {
      return next(
        ApiErrors.badRequest("Country parameter is missing or invalid")
      );
    }
  };

  getRecipesByCountry = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const country = req.query.country as string | undefined;

    if (typeof country === "string") {
      try {
        const recipes = await this.recipesService.getRecipesByCountry(country);
        return res.status(200).json(recipes);
      } catch (error: unknown) {
        handleServiceError(error, next);
      }
    } else {
      return next(
        ApiErrors.badRequest("Country parameter is missing or invalid")
      );
    }
  };

  getRecipesByCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const categoryName = req.query.categoryName as string | undefined;

    if (typeof categoryName === "string") {
      try {
        const recipes = await this.recipesService.getRecipesByCategory(
          categoryName
        );
        return res.status(200).json(recipes);
      } catch (error: unknown) {
        handleServiceError(error, next);
      }
    } else {
      return next(
        ApiErrors.badRequest("Country parameter is missing or invalid")
      );
    }
  };

  getRecipesById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const { id } = req.params;
    try {
      const recipe = await this.recipesService.getRecipesById(id);
      if (!recipe) {
        return next(ApiErrors.badRequest("Recipe not found"));
      }
      return res.status(200).json(recipe);
    } catch (error: unknown) {
      if (error instanceof Error) {
        next(ApiErrors.badRequest(error.message));
      } else {
        next(ApiErrors.badRequest("An unknown error occurred"));
      }
    }
  };
}

export default new RecipesController();
