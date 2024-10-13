import React from "react";
import "./LatestNews.css";
import NewsCard from "./NewsCard";

const LatestNews = () => {
  return (
    <div className="latestNews">
      <p>Blog & News</p>
      <p>Read Our Latest News</p>
      <div className="flex">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default LatestNews;
