import React from "react";
import Layout from "../components/Layout/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { BsClock, BsClockHistory, BsPeople } from "react-icons/all";

export const query = graphql`
  query getRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      id
      title
      cookTime
      prepTime
      servings
      recipeImage {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
    }
  }
`;

const RecipeTemplate = ({ data }) => {
  console.log(data);
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    description: { description },
    recipeImage,
  } = data.contentfulRecipe;
  const { tags, instructions, ingredients, tools } = content;
  const pathToImage = getImage(recipeImage);
  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">{title}</div>
        <section className="recipe-hero">
          <GatsbyImage alt={title} image={pathToImage} className="about-img" />
        </section>
        <article className="recipe-info">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="recipe-icons">
            <article>
              <BsClock />
              <h5>prep time</h5>
              <p>{prepTime} min.</p>
            </article>
            <article>
              <BsClockHistory />
              <h5>cook time</h5>
              <p>{cookTime} min.</p>
            </article>
            <article>
              <BsPeople />
              <h5>servings</h5>
              <p>{servings} min.</p>
            </article>
          </div>
          <div className="recipe-tags">
            {tags.map((tag, index) => {
              return (
                <Link to={`/${tag}`} key={index}>
                  {tag}
                </Link>
              );
            })}
          </div>
        </article>
        <section className="recipe-content">
          <article>
            <h4>instructions</h4>
            {ingredients.map((item, index) => {
              return (
                <div key={index} className="single-instruction">
                  <header>
                    <p>step {index + 1}</p>
                    <div></div>
                  </header>
                  <p>{item}</p>
                </div>
              );
            })}
          </article>
          <article className="second-column">
            <div>
              <h4>ingredients</h4>
              {ingredients.map((item, index) => {
                return (
                  <p key={index} className="single-ingredient">
                    {item}
                  </p>
                );
              })}
            </div>
            <div>
              <h4>tools</h4>
              {tools.map((item, index) => {
                return (
                  <p key={index} className="single-tool">
                    {item}
                  </p>
                );
              })}
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default RecipeTemplate;
