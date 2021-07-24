import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO";

const ErrorPage = () => {
  return (
    <Layout>
      <SEO title="error page" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  );
};

export default ErrorPage;
