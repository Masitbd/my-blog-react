import React from "react";
import articleContent from "./article-content";
import ArticleList from "./ArticleList";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);
  if (!article) return <h1>Article does not exists</h1>;
  return (
    <div>
      <h1>{article.title}</h1>
      {article.content.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
};

export default ArticlePage;
