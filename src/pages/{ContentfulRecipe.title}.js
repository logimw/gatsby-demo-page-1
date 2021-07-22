import React from "react";
import Layout from "../components/Layout/Layout";

const RecipeTemplate = props => {
  return (
    <Layout>
      <main className="page">
        <h4>{props.params.title}</h4>
      </main>
    </Layout>
  );
};

export default RecipeTemplate;
