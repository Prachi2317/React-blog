import { useState } from "react";
import { firestore } from "../firebase";


function CreatePost() {
  const[title,setTitle]=useState();
  const[content,setContent]=useState();
  const[subTitle,setSubTitle]=useState();
  function handleSubmit(e){
    // when we the event triggered it prevent from refresh the browser
    e.preventDefault();
    console.log('title',title);
    console.log('subTitle',subTitle);
    console.log('content',content);
    firestore.collection('posts').add({
      title,
      content,
      subTitle,
      createdAt:new Date(),

    })

  }
    return (
      <div className="create-post">
       <h1>Create Post</h1>
       <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input value={title} onChange={(e)=>{
            setTitle(e.target.value)
          }}/>
        </div>

        <div className="form-field">
          <label>Sub-Title</label>
          <input value={subTitle} onChange={(e)=>{
            setSubTitle(e.target.value)
          }}/>
        </div>

        <div className="form-field">
          <label>Content</label>
         <textarea value={content} onChange={(e)=>{
            setContent(e.target.value)
          }}/>
        </div>
        <button className="create-post-btn">Create-Post</button>
       </form>
       
      </div>
    );
  }
  
  export default CreatePost;
  