import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';

export const PfPosts = () => {

    const [ posts , setPosts ] = useState([]);
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
  
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

    function handleDeletePost(postId) {
      axios
        .request({
          method: "delete",
          url: `http://16.170.173.197/posts/${postId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          alert("...............")
          const updatedPosts = posts.filter((p) => {
            return p.id !== postId;
          });
          setPosts(updatedPosts);
          alert("Post Deleted");
        })
        .catch((error) => {
          alert(error);
        });
    };

    function handleEditPost(postId) {
      const newDiscription = prompt("please add the new disc");
  
      axios
        .request({
          method: "put",
          url: `http://16.170.173.197/posts/${postId}`,
          data: {
            description: newDiscription,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          alert(response);
        })
        .catch((error) => {
          alert(error);
        });
    };
  
    const allPosts = posts.map( (p) => {
      if( p.user.id === id ){
        console.log( p.user.id);
        return(
          <div style={{  height:"160px" , width:"160px" }} >
            <img src={p.image} style={{ height:"160px" , width:"160px", objectFit:"cover" }} />
            <Button onClick={() => handleDeletePost(p.user.id)}  color='error' sx={{ height:"30px", width:"10px", position:"relative", bottom:"102.5%",}}  > <DeleteIcon/> </Button>
            <Button onClick={() => handleEditPost(p.user.id)} color='success' sx={{ height:"30px", width:"10px", position:"relative", bottom:"102.5%", left:"20%" }}  > <EditIcon/> </Button>
          </div>
        )
      }
    })

  return (
    <div style={{width:"460px",  display:"flex", flexWrap:"wrap", alignContent:"flex-start", gap:"5px"}} >
        {allPosts}
    </div>
  )
}
