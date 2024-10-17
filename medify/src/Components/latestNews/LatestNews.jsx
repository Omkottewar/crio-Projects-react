import React from "react";
import "./LatestNews.css";
import NewsCard from "./NewsCard";

const LatestNews = () => {
  return (
    <div className="latest-news-container">
      <h2 className="latest-news-title">Blog & News</h2>
      <h3 className="latest-news-subtitle">Read Our Latest News</h3>
      <div className="latest-news-card-wrapper">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default LatestNews;
