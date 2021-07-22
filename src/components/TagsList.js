import React from "react";
import setupTags from "../utils/setupTags";
import { Link } from "gatsby";

const TagsList = ({ recipes }) => {
  const sortedTags = setupTags(recipes);
  console.log(sortedTags);
  return (
    <div className="tags-container">
      <h4>tags list</h4>
      <div className="tags-list">
        {sortedTags.map((tag, index) => {
          const [text, value] = tag;
          return (
            <Link key={index} to={`/${text}`}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
