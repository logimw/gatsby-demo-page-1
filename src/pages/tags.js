import React from "react";
import Layout from "../components/Layout/Layout";
import { graphql, Link } from "gatsby";
import setupTags from "../utils/setupTags";
import slugify from "slugify";
import SEO from "../components/SEO";

const TagsPage = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes);
  return (
    <Layout>
      <SEO title="Tags page" />
      <main className="page">
        <h1>tags page</h1>
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const tagSlug = slugify(text, { lower: true });
            return (
              <Link to={`/tags/${tagSlug}`} className="tag">
                <h5>{text}</h5>
                <p>{value > 1 ? `${value} recipes` : `${value} recipe`} </p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default TagsPage;
