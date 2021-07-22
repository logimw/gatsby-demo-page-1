import React from "react";
import Layout from "../components/Layout/Layout";
import { graphql, Link } from "gatsby";
import setupTags from "../utils/setupTags";

const TagsPage = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes);
  return (
    <Layout>
      <main className="page">
        <h1>tags page</h1>
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            return (
              <Link to={`/${text}`} className="tag">
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
