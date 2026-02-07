import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Createpost from  "./components/Createpost"
import Feed from "./components/Feed";

function App() {
  return (
   <div style={{ background: "linear-gradient(to left, #093f5c, #9d3bff)",height:"100vh"}}>


    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={ <Createpost /> } />
      </Routes>
    </BrowserRouter>
   </div> 
  );
}

export default App;

                                                                                                                                                                                                                                               
