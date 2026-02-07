import { useState } from "react";
import API from "../api";

function CreatePost() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = localStorage.getItem("username");

    await API.post("/create", { username, text, image });
    alert("Post created!");
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px"}}>

    <div style={{ padding: "50px",border:"1px solid black",borderRadius:"5px",marginTop:"100px",background:"linear-gradient(to left,blue,pink)",textAlign:"center" }}>
      <h2  style={{textAlign:"center",marginBottom:"20px",fontFamily:"sans-serif",fontSize:"25px",  backgroundImage: "linear-gradient(to right, #ee0fba, #e9e917)",
      WebkitBackgroundClip: "text",
      color: "transparent"}}>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea  style={{borderRadius:"7px",padding:"4px",outline:"none"}} placeholder="Write something..." onChange={e => setText(e.target.value)} /><br/><br/>
        <input  style={{borderRadius:"7px",padding:"4px",outline:"none"}} placeholder="Image URL (optional)" onChange={e => setImage(e.target.value)} /><br/><br/>
        <button style={{borderRadius:"7px",padding:"5px 20px 5px 20px",cursor:"pointer"}}>Post</button>
      </form>
    </div>
    </div>
  );
}

export default CreatePost;
