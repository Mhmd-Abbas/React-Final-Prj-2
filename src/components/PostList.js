import "../App.css"
import Post from "./Post";
import { useEffect, useState } from "react";
import axios from "axios";

function PostList() {

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
    return  <Post
              avt={p.user.avatar}
              name={p.user.userName}
              src={p.image}
              des={p.description}
              likes={p.likes.length}
            />
  })

  return (
    <div className="PostList">
      {allPosts}
    </div>
  );
}

export default PostList;
