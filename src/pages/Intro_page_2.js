import React from 'react';
import './Intro_page_2.css';
import {Link} from 'react-router-dom';

function Intro_page_2() {
    return (
      <section className="container2">
      <div className="text_intro_2">
        <h1 className="intro_2_h1">Schnell und Bequem</h1>
        <p className="intro_2_p">Du bekommst deinen Vermieter seit Tagen nicht ans Telefon? Kontaktiere ihn schnell und bequem über die App.</p>
      </div>
      <div className="button_to_intro_3">
       <Link to='/Intro_3'>
       <img className = "button_to_3" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Raggruppa%20163.svg?alt=media&token=fb908b40-2e55-4960-8d26-3ee96a382ada" alt="to_intro_3"/>
       </Link>
      </div>
      </section>
    );
  }

export default Intro_page_2;