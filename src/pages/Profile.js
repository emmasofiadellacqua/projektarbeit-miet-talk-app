import React from 'react';
import './Profile.css';
import Navbar from "../components/navbar.js"

function Profile() {
    return (
      <section className="container_profile">
       <div className="div_profile">
        <h1 className="h1_profile"> &#10094; &nbsp; PROFIL</h1>
            
          <div className="div_profile_1">
                <p className="p_profile">Adresse</p>
                <p className="p_profile_1">Musterstr. 7, 97070 Würzburg</p>
          </div>
        <br/>
        <div className="div_profile_2">
                <p className="p_profile">E-Mail</p>
                <p className="p_profile_1">max.mustermann@gmail.com</p>
          </div> 
          <br/>
        <div className="div_profile_2">
                <p className="p_profile">Telefonnummer</p>
                <p className="p_profile_1">+49 176 78245627</p>
          </div> 
          <br/>
        <div className="div_profile_2">
                <p className="p_profile">Mieteginn</p>
                <p className="p_profile_1">01.09.2019</p>
          </div>    
          <br/>
        <div className="div_profile_2">
                <p className="p_profile">Push-Benachrichtigungen</p>
                <p className="p_profile_1">Aktiv</p>
          </div>  
        </div>
        <div className="nav_div"> 
      <Navbar></Navbar>
      </div>
      </section>
    );
  }

export default Profile;