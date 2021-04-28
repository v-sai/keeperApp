import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [posts,setPosts]=useState([]);

  function addToArray(post){
    setPosts(prevValues => {
      return [...prevValues,post];
    })
  }
  function delHandler(postId){
    setPosts(prevValues=>{
      return prevValues.filter((item,index)=>{
        return postId!==index
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea  addHandler = {addToArray}/>
     { posts.map((item,index)=>{
        return <Note key={index} id = {index} title={item.title} content={item.content} del={delHandler}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
