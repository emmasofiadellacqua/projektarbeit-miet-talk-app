import React from 'react';
import './Intro_page_1.css';
import {Link} from 'react-router-dom';

function Intro_page_1() {
    return (
      <section className="container1">
      <div className="text_intro_1">
        <h1 className="intro_1_h1">Easy und Zuverlässig</h1>
        <p className="intro_1_p">Kein unübersichtliches Papierchaos mehr! Lade die wichtigsten Dokumente für dich und deinen Vermieter mit nur wenigen Klicks im Portal hoch.</p>
      </div>
      <div className="button_to_intro_2">
       <Link to='/Intro_2'>
       <img className = "button_to_2" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Raggruppa%20163.svg?alt=media&token=fb908b40-2e55-4960-8d26-3ee96a382ada" alt="to_intro_2"/>
       </Link>
      </div>
      </section>
    );
  }

export default Intro_page_1;