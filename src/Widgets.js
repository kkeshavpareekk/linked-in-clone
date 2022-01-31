import { FiberManualRecord, Info } from "@mui/icons-material";
import React from "react";
import "./widgets.css";

const Widgets = () => {
  const newsArticles = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__article__left">
        <FiberManualRecord />
      </div>
      <div className="widgets__article__right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linked News</h2>
        <Info />
      </div>
      {newsArticles(
        "The top career experts to follow",
        "Top news • 18,323 readers"
      )}
      {newsArticles(
        "Good habits to swear by during WFH",
        "5d ago • 5,453 readers"
      )}
      {newsArticles(
        "Why are we still writing resumes?",
        "Top news • 8,363 readers"
      )}
      {newsArticles(
        "Are you glued to your phone?",
        "Top news • 16,823 readers"
      )}
    </div>
  );
};

export default Widgets;
