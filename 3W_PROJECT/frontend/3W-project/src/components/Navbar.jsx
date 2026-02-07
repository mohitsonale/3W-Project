import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      margin:"0px",
      padding: "15px",
      position:"sticky",
      color: "white",
      display: "flex",
      justifyContent: "space-around",
      fontSize:"20px"
              
    }}>
                                                                                                                                      
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Feed</Link>
      <Link to="/create" style={{ color: "white", textDecoration: "none" }}>Create Post</Link>
      <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
      <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>Sign up</Link>
    </nav>
  );
}

export default Navbar;                           
