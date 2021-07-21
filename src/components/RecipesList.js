import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, recipeImage, prepTime, cookTime } = recipe;
        const pathToImage = getImage(recipeImage);
        return (
          <Link to={title} key={id}>
            <GatsbyImage
              alt={title}
              image={pathToImage}
              className="recipe-img"
            />
            <h5>{title}</h5>
            <p>Prep time: {prepTime} min</p>
            <p>Cook time: {cookTime} min</p>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesList;
