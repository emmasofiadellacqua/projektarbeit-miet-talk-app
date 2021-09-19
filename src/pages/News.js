import React, {useState, useEffect} from 'react';
import './News.css';
import Navbar from "../components/navbar.js";
import app from "../firebase.js";


const db = app.firestore();
 
function News () {

   const [posts,setPosts]= useState([]);
   useEffect(() => {
     const fetchPosts = async () => {
         const postsCollection = await db.collection("posts").get();
         setPosts(
             postsCollection.docs.map((doc) => {
             return doc.data();
           })
         );
       };
       fetchPosts();
     }, []);
 
     
    const [picture, setPicture] = React.useState(null);
      
    const onFileChange = async (e) => {
      const file = e.target.files[0];
      const storageRef = app.storage().ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      setPicture(await fileRef.getDownloadURL());
    };
    
    //const history = useHistory();
    const onSubmit = async (e) => {
      e.preventDefault();
      const author = e.target.author.value;
      const content = e.target.content.value;
      if (!author || !content || !picture) {
        return;
      }
      await db.collection("posts").doc(content).set({
        content: content,
        author: author,
        picture: picture,
      });
     //history.push("/news_feed")
    };


    return (
    <section className="container_pinn">
        <div className="text_pinn">
            <h1 className="pinn_text">Pinnwand</h1>
        </div>
        <div className="sub_container_news">
       <div className="form_container">
        <form onSubmit={onSubmit} className="form_news">
            <label for="picture-upload" class="custom-file-upload-news">Bild auswählen</label>
              <input type="file" onChange={onFileChange} id="picture-upload" className="file_input" />
              <input type="text" name="author" placeholder="Dein Name" className="author" /><br/>
              <input type="text" name="content" placeholder="Text hinzufügen..." className="content" /><br/>
              <div classname="submit_button_post">
              <button className="submit_post">Posten</button>
              </div>
         </form>
         </div>

        <div className="feed">
         {
        posts && posts.map(post=>{
          return(
         <div className="news" key={post.content}>
         <div className="post_author">{post.author}</div><br/>
         <div className="post_content">{post.content}</div><br/>
         <div className="post_pic"><img className = "post_img" src={post.picture} alt="Pic"/></div>
         </div>)
        })
      }
         </div>
         </div>
      <div className="nav_div"> 
         <Navbar></Navbar>
         </div>
      </section>
   );
   };

export default News;
