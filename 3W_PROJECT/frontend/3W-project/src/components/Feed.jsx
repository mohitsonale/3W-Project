import { useEffect, useState } from "react";
import API from "../api";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);


  const fetchPosts = async () => {
    const res = await API.get("/feed");
    setPosts(res.data);
  };
 
  const deletePost = async (id) => {
  if (window.confirm("Delete this post?")) {
    await API.delete(`/delete-post/${id}`);
    setOpenMenu(null);
    fetchPosts();
  }
};

useEffect(() => {
    fetchPosts();
  }, []);

  const likePost = async (id) => {
    const username = localStorage.getItem("username");
    await API.post(`/like/${id}`, { username });
    fetchPosts();
  };

  const commentPost = async (id) => {
    const username = localStorage.getItem("username");
    const text = prompt("Enter comment:");
    await API.post(`/comment/${id}`, { username, text });
    fetchPosts();
  };

  return (
    <div style={{ padding: "20px" ,background:"white" ,textAlign:"center" }}>
      <h2 style={{fontSize:"40px",fontStyle:"initial", boxShadow:"0px 10px 10px rgba(0, 0, 0, 0.2)",borderRadius:"5px"}}>Social Feed</h2>

      {posts.map(post => (
        <div key={post._id} style={{
         
          padding: "10px",  
          borderRadius:"5px",
          marginBottom: "10px",
          margin:"10px auto",
          boxShadow:"0px 10px 10px rgba(0, 0, 0, 0.3)"
          
        }}>
          <h4>{post.username}</h4>
          <p style={{marginBottom:"10px",fontSize:"20px",fontStyle:"initial"}}>{post.text}</p>
        
            
         {post.image && (
  <div style={{ position: "relative", display: "inline-block" }}>

    <img 
      src={post.image}
      width="200"
      style={{ borderRadius: "10px", marginBottom: "10px" }}
      alt=""
    />

    <button
      onClick={() => setOpenMenu(openMenu === post._id ? null : post._id)}
      style={{
        position: "absolute",
        top: "5px",
        right: "5px",
        background: "white",
        border: "none",
        borderRadius: "50%",
        width: "25px",
        height: "25px",
        cursor: "pointer"
      }}
    >
      ⋮
    </button>
    {openMenu === post._id && (
      <div
        style={{
          position: "absolute",
          top: "30px",
          right: "5px",
          background: "white",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          borderRadius: "5px",
          padding: "5px"
        }}
      >
        <button
          onClick={() => deletePost(post._id)}
          style={{
            border: "none",
            background: "red",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Delete
        </button>
      </div>
    )}

  </div>
)}



          <hr style={{marginBottom:"10px"}} />
          
          <div style={{padding:"10px",fontFamily:"inherit",fontSize:"17px"}}>
            <button style={{padding:"2px 5px 2px 5px "}} onClick={() => likePost(post._id)}>Like</button>
            {post.likes.length} 
             
            <button style={{padding:"2px 5px 2px 5px "}} onClick={() => commentPost(post._id)}>Comment</button>
            {post.comments.length} 
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default Feed;
