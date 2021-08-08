import React from 'react';
import './Home_page.css';
import {Link} from 'react-router-dom';


const Home_page = () => {
      return (
      <section className="container4">
          <div className="text_home_page">
              <h1 className="hello_text">Hallo!<br></br>Was möchtest du heute machen?</h1>
          </div>
          <div className="home_button_grid">
      <div className="kontaktieren">
         <Link to="/Kontakt_page"><img className = "button_to_contact" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Home%2FVermieter_kontaktieren.svg?alt=media&token=99feaa8b-d13f-453e-bb31-917453a94d7a" alt="to_contact"/>
         </Link>
      </div>
      <div className = "dokumente">
         <Link to="/Dokumente_page"><img className = "button_to_docu" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Home%2FDokumente.svg?alt=media&token=30a8a115-776d-4045-b07b-6e6b0b106c32" alt="to_documents"/>
         </Link>
      </div>
      <div className="meine_wohnung">
         <Link to="/Wohnung_page"><img className = "button_to_wohnung" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Home%2FMeine%20Wohnung.svg?alt=media&token=e99fb45d-f171-4cc2-a666-fa6af210ebce" alt="to_wohnung"/>
         </Link>
      </div>
      <div className="pinnwand">
         <Link to="/Pinnwand_page"><img className = "button_to_feed" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Home%2FPinnwand.svg?alt=media&token=7352c1e4-48a8-44e3-a5a1-0c3285b05bd2" alt="to_feed"/>
         </Link>
      </div>
      </div>
      </section>
    );
  };
  


  export default Home_page;