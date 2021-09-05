import React from 'react';
import app from '../firebase.js'


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
      
        return (
          <>
            <form onSubmit={onSubmit}>
              <input type="file" onChange={onFileChange} />
              <input type="text" name="title" placeholder="Title" />
              <button>Submit</button>
            </form>
          </>
        );
      }

    
  export default Upload_files;