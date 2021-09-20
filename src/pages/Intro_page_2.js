import React from 'react';
import './Intro_page_2.css';
import {Link} from 'react-router-dom';

function Intro_page_2() {
    return (
      <section className="container2">
       <div className = "close_intro_container">
        <Link to='/signup'>
       <img className = "close_button" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Introduction%2FClose_button.svg?alt=media&token=8321112c-f7ec-46f0-9c2b-67385a0f1070" alt="to_signup"/>
       </Link>
       </div>
      <div className="text_intro_2">
        <h1 className="intro_2_h1">Schnell und Bequem</h1>
        <p className="intro_2_p">Du bekommst deinen Vermieter seit Tagen nicht ans Telefon? Kontaktiere ihn schnell und bequem über die App.</p>
      </div>
      <div className="dots_container">
        <img className="dots" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Introduction%2FDots2.svg?alt=media&token=52bf371b-2212-4ac7-a992-e45b1c80793c" alt="dots"></img>
        </div>
      <div className="button_to_intro_3">
       <Link to='/Intro_3'>
       <img className = "button_to_3" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Introduction%2FNext_button.svg?alt=media&token=b449ce98-8edb-48b3-b6af-31cc99411b7d" alt="to_intro_3"/>
       </Link>
      </div>
      </section>
    );
  }

export default Intro_page_2;