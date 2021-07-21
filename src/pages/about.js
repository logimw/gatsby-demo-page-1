import React from "react";
import Layout from "../components/Layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h2>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.{" "}
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <Link to="/contact" className="btn">
              Contact{" "}
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Salt in bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;
