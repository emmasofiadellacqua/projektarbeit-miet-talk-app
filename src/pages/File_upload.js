import React, { useEffect } from 'react';
import app from '../firebase.js'


const db = app.firestore();

function Upload_files() {
        const [fileUrl, setFileUrl] = React.useState(null);
        const [documents, setDocuments] = React.useState([]);
      
        const onFileChange = async (e) => {
          const file = e.target.files[0];
          const storageRef = app.storage().ref();
          const fileRef = storageRef.child(file.name);
          await fileRef.put(file);
          setFileUrl(await fileRef.getDownloadURL());
        };
      
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
        };
      
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
      
        return (
          <>
            <form onSubmit={onSubmit}>
              <input type="file" onChange={onFileChange} />
              <input type="text" name="title" placeholder="Title" />
              <button>Submit</button>
            </form>
            <div>
              {documents.map((document) => {
                return (
                  <div key={document.title}>
                    <p>{document.url}</p>
                    <p>{document.title}</p>
                </div>
                );
              })}
            </div>
          </>
        );
      }
    
  export default Upload_files;