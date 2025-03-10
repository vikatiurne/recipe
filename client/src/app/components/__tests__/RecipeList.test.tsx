import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RecipeList from "../RecipeList";
import { mockRecipes } from "../__mocks__/mockRecipes";

describe("RecipeList", () => {
  it("renders recipes", () => {
    render(
      <RecipeList
        recipes={mockRecipes}
        visibleCount={1}
        handleShowMore={() => {}}
        loading={false}
        error={null}
      />
    );
    expect(screen.getByText(/Migas/i)).toBeInTheDocument();
  });

    it("shows loading state", () => {
      render(
        <RecipeList
          recipes={[]}
          visibleCount={0}
          handleShowMore={() => {}}
          loading={true}
          error={null}
        />
      );
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it("shows error message", () => {
      render(
        <RecipeList
          recipes={[]}
          visibleCount={0}
          handleShowMore={() => {}}
          loading={false}
          error="Error loading"
        />
      );
      expect(screen.getByText(/error loading/i)).toBeInTheDocument();
    });

    it('shows "Recipes not found" when no recipes are available', () => {
      render(
        <RecipeList
          recipes={[]}
          visibleCount={0}
          handleShowMore={() => {}}
          loading={false}
          error={null}
        />
      );
      expect(screen.getByText(/recipes not found/i)).toBeInTheDocument();
    });
});
