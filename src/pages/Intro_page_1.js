import React from 'react';
import './Intro_page_1.css';
import {Link} from 'react-router-dom';

function Intro_page_1() {
    return (
      <section className="container1">
         <div className = "close_intro_container">
        <Link to='/signup'>
       <img className = "close_button" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Introduction%2FClose_button.svg?alt=media&token=8321112c-f7ec-46f0-9c2b-67385a0f1070" alt="to_signup"/>
       </Link>
       </div>
      <div className="text_intro_1">
        <h1 className="intro_1_h1">Easy und Zuverlässig</h1>
        <p className="intro_1_p">Kein unübersichtliches Papierchaos mehr! Lade die wichtigsten Dokumente für dich und deinen Vermieter mit nur wenigen Klicks im Portal hoch.</p>
      </div>
      <div className="dots_container">
        <img className="dots" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Introduction%2FDots1.svg?alt=media&token=a996a7d2-2f36-4078-9df5-4724959be8db" alt="dots"></img>
        </div>
      <div className="button_to_intro_2">
       <Link to='/Intro_2'>
       <img className = "button_to_2" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Introduction%2FNext_button.svg?alt=media&token=b449ce98-8edb-48b3-b6af-31cc99411b7d" alt="to_intro_2"/>
       </Link>
      </div>
      </section>
    );
  }

export default Intro_page_1;