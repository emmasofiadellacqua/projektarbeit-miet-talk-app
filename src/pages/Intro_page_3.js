import React from 'react';
import './Intro_page_3.css';
import {Link} from 'react-router-dom';

function Intro_page_3() {
    return (
      <section className="container3">
      <div className="text_intro_3">
        <h1 className="intro_3_h1">Alles aus einer Hand</h1>
        <p className="intro_3_p">Dokumente hochladen und verwalten. Einfache Kommunikation. Benachrichtigungen für anstehende Termine (Müllabfuhr, Schornsteinfeger)</p>
      </div>
      <div className="button_to_login">
       <Link to='/signup'>
       <img className = "login_register" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Raggruppa%20163.svg?alt=media&token=fb908b40-2e55-4960-8d26-3ee96a382ada" alt="to_intro_3"/>
       </Link>
      </div>
      </section>
    );
  }

export default Intro_page_3;