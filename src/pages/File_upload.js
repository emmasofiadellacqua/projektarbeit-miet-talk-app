import React from 'react';
import app from '../firebase.js';
import "./File_upload.css";
//import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Navbar from "../components/navbar.js"


const db = app.firestore();

function Upload_files() {
        const [fileUrl, setFileUrl] = React.useState(null);
      
        const onFileChange = async (e) => {
          const file = e.target.files[0];
          const storageRef = app.storage().ref();
          const fileRef = storageRef.child(file.name);
          await fileRef.put(file);
          setFileUrl(await fileRef.getDownloadURL());
        };
        
        const history = useHistory();
        const onSubmit = async (e) => {
          e.preventDefault();
          const title = e.target.title.value;
          if (!title || !fileUrl) {
            return;
          }
          await db.collection("documents").doc(title).set({
            title: title,
            url: fileUrl,
          });
          history.push("/documents")
        };
      
        return (
          <section className="containerForm">
            <div className="text_form">
            <h1 className="title_form">Upload</h1>
            <p className="form_p">Hier kannst du Dokumente hochladen, die du später in "Dokumente" ansehen kannst.</p>
            </div>
            <form onSubmit={onSubmit} className="form">
            <label for="file-upload" class="custom-file-upload">File auswählen</label>
              <input type="file" onChange={onFileChange} id="file-upload" className="file_input" />
              <input type="text" name="title" placeholder="Titel deines Dokumentes" className="title" /><br/>
              <div classname="submit_button">
              <button className="submit">Abschicken</button>
              </div>
            </form>
            <div className="nav_div"> 
      <Navbar></Navbar>
      </div>
          </section>
        );
      }

    
  export default Upload_files;