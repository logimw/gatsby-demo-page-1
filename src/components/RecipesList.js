import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, recipeImage, prepTime, cookTime } = recipe;
        const pathToImage = getImage(recipeImage);
        const slug = slugify(title, { lower: true });
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
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
