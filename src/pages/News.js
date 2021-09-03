import React from 'react';
import './News.css';


function News () {
    return (
    <section className="container_pinn">
        <div className="text_pinn">
            <h1 className="pinn_text">Pinnwand</h1>
        </div>
        <div className="feed">
    <div className="news_1">
       <img className = "news_view" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/News%2FRaggruppa%20748.png?alt=media&token=197662a0-e8f3-474f-a91d-ebf6803fc52e" alt="News1"/>
    </div>
    <div className = "news_2">
       <img className = "news_view" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/News%2FRaggruppa%20749.png?alt=media&token=947d51a0-7bea-4ba3-9d16-378ff1241912" alt="News2"/>
    </div>
    <div className="news_3">
       <img className = "news_view" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/News%2FRaggruppa%20750.png?alt=media&token=9d071fca-32e0-4613-82b4-70616c5d1e63" alt="News3"/>
    </div>
    </div>
    </section>
  );
};

export default News;
