import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      &copy; {new Date().getFullYear()}
      <span>&nbsp;SimplyRecipes as demo page</span>&nbsp;with&nbsp;
      <a href="https://www.gatsby.com">Gatsby</a>
    </footer>
  );
};

export default Footer;
