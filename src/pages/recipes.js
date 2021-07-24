import React from "react";
import Layout from "../components/Layout/Layout";
import Recipes from "../components/Recipes";
import SEO from "../components/SEO";

const RecipesPage = () => {
  return (
    <Layout>
      <SEO title="Browse recipes " />
      <main className="page">
        <h1>Recipes page</h1>
        <Recipes />
      </main>
    </Layout>
  );
};

export default RecipesPage;
