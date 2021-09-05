import React from 'react';
import './Documents.css';
import {Link} from 'react-router-dom';

function Documents () {
   return(
      <section className="container_doc">
        <div className="text_doc">
            <h1 className="doc_text">Dokumente</h1>
            <p className="doc_p">Hier sind deine gespeicherte Dokumente.</p>
        </div>
        <div className="docu_grid">
    <div className="document">
       <Link to=""><img className = "document_view" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Documents%2FDocument.svg?alt=media&token=edabb9b0-3fc9-465c-9ddb-1473212fcd90" alt="Doku1"/>
       </Link>
    </div>
    <div className = "document">
       <Link to=""><img className = "document_view" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Documents%2FDocument.svg?alt=media&token=edabb9b0-3fc9-465c-9ddb-1473212fcd90" alt="Doku2"/>
       </Link>
    </div>
    <div className="document">
       <Link to=""><img className = "document_view" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Documents%2FDocument.svg?alt=media&token=edabb9b0-3fc9-465c-9ddb-1473212fcd90" alt="Doku3"/>
       </Link>
    </div>
    <div className="upload">
    <Link to="/file_upload"><img className = "upload_button" src="https://firebasestorage.googleapis.com/v0/b/miet-talk.appspot.com/o/Documents%2FUpload.svg?alt=media&token=c9462975-65d2-4312-ba6f-b75ea2617c2c" alt="Upload"/>
    </Link>
    </div>
    </div>
    </section>
  );
};



export default Documents;