import { useState } from "react";
import API from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/login", { email, password });
    localStorage.setItem("username", res.data.username);
    alert("Login successful!");
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px"}}>

    <div style={{ padding: "50px",border:"1px solid black",borderRadius:"5px",marginTop:"100px",background:"linear-gradient(to left,blue,pink)",textAlign:"center" }} >
      <h2 style={{textAlign:"center",marginBottom:"20px",fontFamily:"sans-serif",fontSize:"25px",  backgroundImage: "linear-gradient(to right, #ee0fba, #e9e917)",
      WebkitBackgroundClip: "text",
      color: "transparent"}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input style={{borderRadius:"7px",padding:"4px",outline:"none"}}  placeholder="Email" onChange={e => setEmail(e.target.value)} /><br/><br/>
        <input style={{borderRadius:"7px",padding:"4px",outline:"none"}}  type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br/><br/>
        <button style={{borderRadius:"7px",padding:"5px 20px 5px 20px",cursor:"pointer"}}>Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
