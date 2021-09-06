import React from 'react';
import './Home_page.css';
import {Link} from 'react-router-dom';
import Navbar from "../components/navbar.js"

const Home_page = () => {
      return (
      <section className="container4">
          <div className="text_home_page">
              <h1 className="hello_text">Hallo!<br></br>Was möchtest du heute machen?</h1>
          </div>
          <div className="home_button_grid">
      <div className="kontaktieren">
         <Link to="/form"><img className = "button_to_contact" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Home%2FVermieter_kontaktieren.svg?alt=media&token=99feaa8b-d13f-453e-bb31-917453a94d7a" alt="to_contact"/>
         </Link>
      </div>
      <div className = "dokumente">
         <Link to="/documents"><img className = "button_to_doku" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Home%2FDokumente.svg?alt=media&token=30a8a115-776d-4045-b07b-6e6b0b106c32" alt="to_documents"/>
         </Link>
      </div>
      <div className="meine_wohnung">
         <Link to="/calendar"><img className = "button_to_calendar" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Home%2FKalendar.svg?alt=media&token=d5d26bbc-c88a-4550-81f5-851a8f19c295" alt="to_calendar"/>
         </Link>
      </div>
      <div className="pinnwand">
      <Link to="/newsfeed"><img className = "button_to_feed" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Home%2FPinnwand.svg?alt=media&token=7352c1e4-48a8-44e3-a5a1-0c3285b05bd2" alt="to_feed"/>
         </Link>
      </div>
      </div>
      <div className="nav_div"> 
      <Navbar></Navbar>
      </div>
      </section>
    );
  };
  


  export default Home_page;