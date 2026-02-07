import { useState } from "react";
import API from "../api";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/signup", { email, password, username });
    alert("Signup successful!");
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px"}}>

    <div style={{ padding: "50px",border:"1px solid black",borderRadius:"5px",marginTop:"100px",background:"linear-gradient(to left,blue,pink)",textAlign:"center" }}>
      <h2 style={{textAlign:"center",marginBottom:"20px",fontFamily:"sans-serif",fontSize:"25px",  backgroundImage: "linear-gradient(to right, #ee0fba, #e9e917)",
      WebkitBackgroundClip: "text",
      color: "transparent"}}>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input style={{borderRadius:"7px",padding:"4px",outline:"none"}} placeholder="Username" onChange={e => setUsername(e.target.value)} /><br/><br/>
        <input style={{borderRadius:"7px",padding:"4px",outline:"none"}}  placeholder="Email" onChange={e => setEmail(e.target.value)} /><br/><br/>
        <input style={{borderRadius:"7px",padding:"4px",outline:"none"}}  type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br/><br/>
        <button style={{borderRadius:"7px",padding:"5px 20px 5px 20px",cursor:"pointer"}}>Signup</button>
      </form>
    </div>
    </div>
  );
}

export default Signup;
