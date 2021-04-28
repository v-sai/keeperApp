import React , { useState } from "react";

function CreateArea(props) {
  let [post,setPost] = useState({
    title:"",
    content:""
  });

  function onChangeHandler(event){

    let {name,value} = event.target;

    setPost(prevValues =>{
      return {
        ...prevValues,[name]:value
      }
      
    });
  }  

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value = {post.title} onChange = {onChangeHandler} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={post.content} onChange = {onChangeHandler} />
        <button onClick = {(event)=>{
                            event.preventDefault();
                            props.addHandler(post);
                            setPost({
                                     title:"",
                                     content:""
                                   });
                            }}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
