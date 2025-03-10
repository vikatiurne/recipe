import { Recipe } from "@/app/types/recipe";
import { extractIngredients } from "../../utils/extractIngredients";

const transformRecipe = (recipeData: any): Recipe => ({
  idMeal: recipeData.idMeal,
  strMeal: recipeData.strMeal,
  strMealAlternate: recipeData.strMealAlternate,
  strCategory: recipeData.strCategory,
  strArea: recipeData.strArea,
  strInstructions: recipeData.strInstructions,
  strMealThumb: recipeData.strMealThumb,
  strTags: recipeData.strTags,
  strYoutube: recipeData.strYoutube,
  strSource: recipeData.strSource,
  strImageSource: recipeData.strImageSource,
  strCreativeCommonsConfirmed: recipeData.strCreativeCommonsConfirmed,
  dateModified: recipeData.dateModified,
  ingredients: extractIngredients(recipeData),
});

export const mockRecipes: Recipe[] = [
  transformRecipe({
    idMeal: "53086",
    strMeal: "Migas",
    strMealAlternate: null,
    strCategory: "Miscellaneous",
    strArea: "Spanish",
    strInstructions:
      "Crumble the bread into small pieces. Sprinkle with cold water, cover with a damp cloth and leave for 30 minutes.\r\nHeat 2 tsp of olive oil in a deep pan. Add the garlic cloves separated, skins on; just make a small cut with a knife to open them and keep frying for 5 minutes. Set the garlic aside.\r\nIn the same oil, where we fried everything, simmer the bread, stirring constantly for 15 minutes and add a grinding of black pepper.\r\nAdd the garlic, continue stirring for about 20 minutes. It will be ready when the bread is soft and golden.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/xd9aj21740432378.jpg",
    strTags: null,
    strYoutube: "https://www.youtube.com/watch?v=GSvFVBpqMKI",
    strIngredient1: "Bread",
    strIngredient2: "Olive Oil",
    strIngredient3: "Garlic",
    strIngredient4: "Pork",
    strIngredient5: "",
    strIngredient6: "",
    strIngredient7: "",
    strIngredient8: "",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "1 large",
    strMeasure2: "1 1/2 L ",
    strMeasure3: "Half",
    strMeasure4: "1 Handfull",
    strMeasure5: " ",
    strMeasure6: " ",
    strMeasure7: " ",
    strMeasure8: " ",
    strMeasure9: " ",
    strMeasure10: " ",
    strMeasure11: " ",
    strMeasure12: " ",
    strMeasure13: " ",
    strMeasure14: " ",
    strMeasure15: " ",
    strMeasure16: " ",
    strMeasure17: " ",
    strMeasure18: " ",
    strMeasure19: " ",
    strMeasure20: " ",
    strSource: "https://www.ibericafood.com/Recipes/post/migas-with-pork",
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  }),
  transformRecipe({
    idMeal: "53065",
    strMeal: "Sushi",
    strMealAlternate: null,
    strCategory: "Seafood",
    strArea: "Japanese",
    strInstructions:
      "STEP 1\r\nTO MAKE SUSHI ROLLS: Pat out some rice. Lay a nori sheet on the mat, shiny-side down. Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear.\r\n\r\nSTEP 2\r\nSpread over some Japanese mayonnaise. Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice.\r\n\r\nSTEP 3\r\nAdd the filling. Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber.\r\n\r\nSTEP 4\r\nRoll it up. Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll.\r\n\r\nSTEP 5\r\nStick down the sides like a stamp. When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll.\r\n\r\nSTEP 6\r\nWrap in cling film. Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film.\r\n\r\nSTEP 7\r\nTO MAKE PRESSED SUSHI: Layer over some smoked salmon. Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film.\r\n\r\nSTEP 8\r\nCover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one.\r\n\r\nSTEP 9\r\nTip it out like a sandcastle. Turn block of sushi onto a chopping board. Get a grown-up to cut into fingers, then remove the cling film.\r\n\r\nSTEP 10\r\nTO MAKE SUSHI BALLS: Choose your topping. Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping.\r\n\r\nSTEP 11\r\nMake into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
    strTags: null,
    strYoutube: "https://www.youtube.com/watch?v=ub68OxEypaY",
    strIngredient1: "Sushi Rice",
    strIngredient2: "Rice wine",
    strIngredient3: "Caster Sugar",
    strIngredient4: "Mayonnaise",
    strIngredient5: "Rice wine",
    strIngredient6: "Soy Sauce",
    strIngredient7: "Cucumber",
    strIngredient8: "",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "300ml ",
    strMeasure2: "100ml",
    strMeasure3: "2 tbs",
    strMeasure4: "3 tbs",
    strMeasure5: "1 tbs",
    strMeasure6: "1 tbs",
    strMeasure7: "1",
    strMeasure8: " ",
    strMeasure9: " ",
    strMeasure10: " ",
    strMeasure11: " ",
    strMeasure12: " ",
    strMeasure13: " ",
    strMeasure14: " ",
    strMeasure15: " ",
    strMeasure16: " ",
    strMeasure17: " ",
    strMeasure18: " ",
    strMeasure19: " ",
    strMeasure20: " ",
    strSource: "https://www.bbcgoodfood.com/recipes/simple-sushi",
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  }),
  transformRecipe({
    idMeal: "53060",
    strMeal: "Burek",
    strMealAlternate: null,
    strCategory: "Side",
    strArea: "Croatian",
    strInstructions:
      "Fry the finely chopped onions and minced meat in oil. Add the salt and pepper. Grease a round baking tray and put a layer of pastry in it. Cover with a thin layer of filling and cover this with another layer of filo pastry which must be well coated in oil. Put another layer of filling and cover with pastry. When you have five or six layers, cover with filo pastry, bake at 200ºC/392ºF for half an hour and cut in quarters and serve.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg",
    strTags: "Streetfood, Onthego",
    strYoutube: "https://www.youtube.com/watch?v=YsJXZwE5pdY",
    strIngredient1: "Filo Pastry",
    strIngredient2: "Minced Beef",
    strIngredient3: "Onion",
    strIngredient4: "Oil",
    strIngredient5: "Salt",
    strIngredient6: "Pepper",
    strIngredient7: "",
    strIngredient8: "",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "1 Packet",
    strMeasure2: "150g",
    strMeasure3: "150g",
    strMeasure4: "40g",
    strMeasure5: "Dash",
    strMeasure6: "Dash",
    strMeasure7: " ",
    strMeasure8: " ",
    strMeasure9: " ",
    strMeasure10: " ",
    strMeasure11: " ",
    strMeasure12: " ",
    strMeasure13: " ",
    strMeasure14: " ",
    strMeasure15: " ",
    strMeasure16: " ",
    strMeasure17: " ",
    strMeasure18: " ",
    strMeasure19: " ",
    strMeasure20: " ",
    strSource:
      "https://www.visit-croatia.co.uk/croatian-cuisine/croatian-recipes/",
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  }),
];

export const mockOneRecipe: Recipe = transformRecipe({
  idMeal: "53065",
  strMeal: "Sushi",
  strMealAlternate: null,
  strCategory: "Seafood",
  strArea: "Japanese",
  strInstructions:
    "STEP 1\r\nTO MAKE SUSHI ROLLS: Pat out some rice. Lay a nori sheet on the mat, shiny-side down. Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear.\r\n\r\nSTEP 2\r\nSpread over some Japanese mayonnaise. Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice.\r\n\r\nSTEP 3\r\nAdd the filling. Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber.\r\n\r\nSTEP 4\r\nRoll it up. Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll.\r\n\r\nSTEP 5\r\nStick down the sides like a stamp. When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll.\r\n\r\nSTEP 6\r\nWrap in cling film. Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film.\r\n\r\nSTEP 7\r\nTO MAKE PRESSED SUSHI: Layer over some smoked salmon. Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film.\r\n\r\nSTEP 8\r\nCover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one.\r\n\r\nSTEP 9\r\nTip it out like a sandcastle. Turn block of sushi onto a chopping board. Get a grown-up to cut into fingers, then remove the cling film.\r\n\r\nSTEP 10\r\nTO MAKE SUSHI BALLS: Choose your topping. Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping.\r\n\r\nSTEP 11\r\nMake into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve.",
  strMealThumb:
    "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
  strTags: null,
  strYoutube: "https://www.youtube.com/watch?v=ub68OxEypaY",
  strIngredient1: "Sushi Rice",
  strIngredient2: "Rice wine",
  strIngredient3: "Caster Sugar",
  strIngredient4: "Mayonnaise",
  strIngredient5: "Rice wine",
  strIngredient6: "Soy Sauce",
  strIngredient7: "Cucumber",
  strIngredient8: "",
  strIngredient9: "",
  strIngredient10: "",
  strIngredient11: "",
  strIngredient12: "",
  strIngredient13: "",
  strIngredient14: "",
  strIngredient15: "",
  strIngredient16: "",
  strIngredient17: "",
  strIngredient18: "",
  strIngredient19: "",
  strIngredient20: "",
  strMeasure1: "300ml ",
  strMeasure2: "100ml",
  strMeasure3: "2 tbs",
  strMeasure4: "3 tbs",
  strMeasure5: "1 tbs",
  strMeasure6: "1 tbs",
  strMeasure7: "1",
  strMeasure8: " ",
  strMeasure9: " ",
  strMeasure10: " ",
  strMeasure11: " ",
  strMeasure12: " ",
  strMeasure13: " ",
  strMeasure14: " ",
  strMeasure15: " ",
  strMeasure16: " ",
  strMeasure17: " ",
  strMeasure18: " ",
  strMeasure19: " ",
  strMeasure20: " ",
  strSource: "https://www.bbcgoodfood.com/recipes/simple-sushi",
  strImageSource: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null,
});
