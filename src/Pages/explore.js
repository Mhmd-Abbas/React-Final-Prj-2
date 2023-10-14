import * as React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

export default function ExplorePage() {
  
  const [ posts , setPosts ] = useState([]);
  const token = localStorage.getItem('token')

  useEffect( () => {
    axios.get("http://16.170.173.197/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then( (response) => {
        setPosts(response.data.posts)
    }).catch( (error) => {
      alert(error)
    })
  }, [] )



  const allPosts = posts.map( (p) => {
    return <img src={p.image} style={{ height:"160px" , width:"160px", objectFit:"cover" }} />
  })

  return (
    <div style={{ marginLeft:"65%", width:"500px",  display:"flex", flexWrap:"wrap", alignContent:"flex-start", gap:"5px"}} >
      {allPosts}
    </div>
  );
}
