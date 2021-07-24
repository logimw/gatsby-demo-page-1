import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

const TagTemplate = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
  pageContext: { tag },
}) => {
  return (
    <Layout>
      <SEO title={tag} />
      <main className="page">
        <h2>{tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getTags($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        recipeImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default TagTemplate;
