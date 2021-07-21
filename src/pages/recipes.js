import React from "react";
import Layout from "../components/Layout/Layout";
import Recipes from "../components/Recipes";

const RecipesPage = () => {
  return (
    <Layout>
      <main className="page">
        <h1>Recipes page</h1>
        <Recipes />
      </main>
    </Layout>
  );
};

export default RecipesPage;
