import React from 'react';
import './Profile.css';
import app from "../firebase";
import {Link} from 'react-router-dom';
import Navbar from "../components/navbar.js"

function Profile () { 
  let user = app.auth().currentUser;
  return (
  <div className="container_profile">
  <section className="Profile_wrapper">

  <div className="div_profile">
      <h1 className="h1_profile"> <Link to="/" className="Link">&#10094;</Link>&nbsp; Profil</h1>
  </div>
  <div className="Profile_Picture">
  <svg xmlns="http://www.w3.org/2000/svg" width="137" height="117" viewBox="0 0 137 117">
  <g id="Gruppe_771" data-name="Gruppe 771" transform="translate(-312.47 -32.47)">
    <circle id="Ellipse_54" data-name="Ellipse 54" cx="58.5" cy="58.5" r="58.5" transform="translate(312.47 32.47)" fill="#233862"/>
    <g id="Gruppe_184" data-name="Gruppe 184" transform="translate(349.778 57.337)">
      <path id="Pfad_443" data-name="Pfad 443" d="M624.4,1104.593a16.506,16.506,0,1,1,16.5-16.508A16.523,16.523,0,0,1,624.4,1104.593Zm0-31.146a14.64,14.64,0,1,0,14.638,14.638A14.659,14.659,0,0,0,624.4,1073.447Z" transform="translate(-603.603 -1071.581)" fill="#f8f8f8" stroke="#f8f8f8" stroke-width="0.5"/>
      <path id="Pfad_444" data-name="Pfad 444" d="M648.04,1117.168H607.524a.931.931,0,0,1-.934-.932v-14a21.193,21.193,0,1,1,42.385,0v14A.931.931,0,0,1,648.04,1117.168Zm-39.586-1.863h38.654V1102.24a19.327,19.327,0,0,0-38.654,0Z" transform="translate(-606.589 -1049.902)" fill="#f8f8f8" stroke="#f8f8f8" stroke-width="0.5"/>
    </g>
  </g>
  <g id="Gruppe_1048" data-name="Gruppe 1048" transform="translate(-124 -183)">
    <circle id="Ellipse_4" data-name="Ellipse 4" cx="20" cy="20" r="20" transform="translate(221 207)" fill="#f99746"/>
    <g id="_112-photo-camera-1" data-name="112-photo-camera-1" transform="translate(232.111 220.333)">
      <g id="Gruppe_1045" data-name="Gruppe 1045" transform="translate(0 0)">
        <g id="Gruppe_1044" data-name="Gruppe 1044" transform="translate(0 0)">
          <path id="Pfad_1470" data-name="Pfad 1470" d="M16.79,53.57H13.267L12.5,51.58a.593.593,0,0,0-.553-.38H5.827a.593.593,0,0,0-.553.38l-.763,1.99H.988A.989.989,0,0,0,0,54.558v9.877a.989.989,0,0,0,.988.988h15.8a.989.989,0,0,0,.988-.988V54.558A.989.989,0,0,0,16.79,53.57Zm-.2,10.667H1.185V54.756H4.919a.593.593,0,0,0,.553-.38l.763-1.99h5.309l.763,1.99a.593.593,0,0,0,.553.38h3.733v9.482Z" transform="translate(0 -51.2)" fill="#fff"/>
        </g>
      </g>
      <g id="Gruppe_1047" data-name="Gruppe 1047" transform="translate(4.721 3.654)">
        <g id="Gruppe_1046" data-name="Gruppe 1046" transform="translate(0 0)">
          <path id="Pfad_1471" data-name="Pfad 1471" d="M140.132,156.439a4.168,4.168,0,1,0,4.168,4.168A4.173,4.173,0,0,0,140.132,156.439Zm0,7.151a2.983,2.983,0,1,1,2.983-2.983A2.986,2.986,0,0,1,140.132,163.59Z" transform="translate(-135.964 -156.439)" fill="#fff"/>
        </g>
      </g>
    </g>
  </g>
</svg>

  </div>
    <div className="div_profile_1">
        <div className="div_profile_2">
                <p className="p_profile">E-Mail </p>
                <p className="p_profile_1">{ user.email }</p>
          </div> 
      <div className="div_profile_2">
                <p className="p_profile">Adresse</p>
                <p className="p_profile_1">Musterstr. 7, 97070 Würzburg</p>
          </div>
        <div className="div_profile_2">
                <p className="p_profile">Telefonnummer</p>
                <p className="p_profile_1">+49 176 78245627</p>
          </div> 
        <div className="div_profile_2">
                <p className="p_profile">Mietbeginn</p>
                <p className="p_profile_1">01.09.2019</p>
          </div>    
        <div className="div_profile_2">
                <p className="p_profile">Push-Benachrichtigungen</p>
                <p className="p_profile_1">Aktiv</p>
          </div>
      </div>
      <div className="nav_div"> 
      <Navbar></Navbar>
      </div>
      <div className="Logout">
  <button className="button_log_out" onClick={() => app.auth().signOut()}><Link to="/" className="Link">Sign out</Link></button>
  </div>
  </section>
  </div>
  );
} 

export default Profile;