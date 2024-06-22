import React from 'react';
import './LatestNews.css';

const LatestNews = () => {
  return (
    <div className="LatestNews" id="LatestNews">
      <h2 style={{textAlign: "center"}}>Latest News</h2>
      <p><strong>27/05/24 - Our new website has arrived!</strong>
        <br/>Check out our new website, complete with our latest news, event schedule and media.</p>
      <p><strong>25/02/24 The Australian Dropbears are heading to Virginia</strong>
        <br/>The 2024 Wold Cup will be held in Richmond, Virginia. Our team is looking to revive our 2016 hopes and take home the major prize.</p>
      <p><strong>05/01/24 Sponsorship Call</strong>
        <br/>We&apos;re on the lookout for new sponsors coming into the 2024 season so please contact us if your business is interested in 
        supporting our teams at the local, state, national and even international level.</p>
    </div>
  );
};

export default LatestNews;