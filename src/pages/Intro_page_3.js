import React from 'react';
import './Intro_page_3.css';
import {Link} from 'react-router-dom';

function Intro_page_3() {
    return (
      <section className="container3">
        <div className="logo_container">
        <img className = "logo" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Introduction%2FLogo.svg?alt=media&token=42ef92ca-7467-45b1-aaf5-32e4d8633b71" alt="logo"/>
        </div>
        <div className = "close_intro_container">
        <Link to='/signup'>
       <img className = "close_button" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Introduction%2FClose_button_blue.svg?alt=media&token=fce0d9b8-0ce9-4878-b8bd-f3aa4fda5484" alt="to_signup"/>
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