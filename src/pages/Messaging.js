import React from 'react';
import './Messaging.css';
import Navbar from '../components/navbar';

function Messaging () {
    return (
    <section className="container_messages">
        <div className="heading_mess"><h1 className="nachrichten_text">Nachrichten</h1></div>
        <div className="searchbar"><img className="search_mess" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Messaging%2FRaggruppa%20187.svg?alt=media&token=96c0420f-8402-47c1-9448-7aa7036d8c93" alt="searchbar"></img></div>
        <div className="screen_messages"><img className="img_mess" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Messaging%2FContent.svg?alt=media&token=626a728e-51f1-4696-8ac3-dbf3198c17eb" alt="content_messages"></img></div>
    <Navbar></Navbar>
    </section>
    );
}

export default Messaging;