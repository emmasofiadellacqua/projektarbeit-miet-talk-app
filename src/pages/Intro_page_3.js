import React from 'react';
import './Intro_page_3.css';
import {Link} from 'react-router-dom';

function Intro_page_3() {
    return (
      <section className="container3">
        <div className = "close_intro_container">
        <Link to='/signup'>
       <img className = "close_button" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Introduction%2FClose_button.svg?alt=media&token=8321112c-f7ec-46f0-9c2b-67385a0f1070" alt="to_signup"/>
       </Link>
       </div>
      <div className="text_intro_3">
        <h1 className="intro_3_h1">Alles aus einer Hand</h1>
        <p className="intro_3_p">Dokumente hochladen und verwalten. Einfache Kommunikation. Benachrichtigungen für anstehende Termine (Müllabfuhr, Schornsteinfeger)</p>
      </div>
      <div className="dots_container">
        <img className="dots" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Introduction%2FDots3.svg?alt=media&token=bf0d7963-c12a-4967-afe5-f42b4802be20" alt="dots"></img>
        </div>
      <div className="button_to_login">
       <Link to='/signup'>
       <img className = "login_register" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Introduction%2FNext_button.svg?alt=media&token=b449ce98-8edb-48b3-b6af-31cc99411b7d" alt="to_intro_3"/>
       </Link>
      </div>
      </section>
    );
  }

export default Intro_page_3;