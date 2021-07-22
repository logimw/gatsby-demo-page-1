import React from "react";
import Layout from "../components/Layout/Layout";
import RecipesList from "../components/RecipesList";
import { graphql } from "gatsby";
const ContactPage = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <h3>Want to get in touch?</h3>
          <article className="contact-info">
            <p>
              In hac habitasse platea dictumst. In iaculis tristique nibh at
              ultrices. Donec mollis eu quam a scelerisque. Mauris hendrerit
              ligula a fringilla euismod. Sed tempor tristique aliquam. Ut
              consequat posuere orci vitae vehicula. Morbi ligula lorem,
              faucibus eget placerat vitae, porttitor sed odio.
            </p>
            <p>
              Ut finibus tortor sed est eleifend, non ultrices nisi laoreet.
            </p>
          </article>
          <article className="contact-info">
            <form action="" className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your name</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your name</label>
                <textarea name="message" id="message" />
              </div>
              <button type="submit" className="btn block">
                Send
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe(filter: { featured: { eq: true } }) {
      nodes {
        title
        cookTime
        prepTime
        recipeImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default ContactPage;
