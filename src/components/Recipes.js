import React from "react";
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query getRecipes {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          tags
        }
        recipeImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

const Recipes = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query);
  console.log(recipes);
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default Recipes;
