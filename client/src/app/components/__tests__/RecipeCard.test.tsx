import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RecipeCard from "../RecipeCard";
import { mockOneRecipe } from "../__mocks__/mockRecipes";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../../utils/api", () => ({
  getRecipeById: jest.fn(() => Promise.resolve(mockOneRecipe)),
}));

describe("RecipeCard", () => {
  it("renders recipe details", async () => {
    render(<RecipeCard recipe={mockOneRecipe} />);
    expect(await screen.findByText(/sushi/i)).toBeInTheDocument();

    const image = screen.getByAltText(/sushi/i); 
    expect(image).toBeInTheDocument();
    const actualSrc = image.getAttribute("src")!;
    const decodedSrc = decodeURIComponent(actualSrc);
    expect(decodedSrc).toContain(
      "themealdb.com/images/media/meals/g046bb1663960946.jpg"
    );
  });
});
