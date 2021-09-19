import React, {useState, useEffect} from 'react';
import './Documents.css';
import app from '../firebase.js'
import {Link} from 'react-router-dom';
import Navbar from "../components/navbar.js"

const db = app.firestore();

function Documents () {

const [documents,setDocuments]= useState([]);

useEffect(() => {
  const fetchDocuments = async () => {
      const documentsCollection = await db.collection("documents").get();
      setDocuments(
          documentsCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchDocuments();
  }, []);

 return(
    <section className="container_doc">
      <div className="container_text_doc">
          <h1 className="doc_text">Dokumente</h1>
          <p className="doc_p">Hier sind deine gespeicherten Dokumente.</p>
      </div>
      <div className="docu_grid">
        { 
          documents
          .map(document => {
            return(
          <div className="document" key={document.title}>
          <Link to={{
          pathname: "/pdf_viewer",
          document: document
          }}><img className = "document_view" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Documents%2FDocument_icon.svg?alt=media&token=57effe1b-e01f-401a-83df-83e27909c219" alt="Doku"/>
          </Link>
          <div className="title_docu">{document.title}</div>
          </div>)
          })
        }
        <div className="upload">
        <Link to="/file_upload"><img className = "upload_button" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Documents%2FUpload.svg?alt=media&token=c9462975-65d2-4312-ba6f-b75ea2617c2c" alt="Upload"/>
        </Link>
        </div>
        </div>
        <Navbar></Navbar>
      </section>
);
}


export default Documents;