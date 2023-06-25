import React from "react";
import "../CSS/AdminNavbar.css";
import { Avatar } from "@mui/material";
function Navbar() {
  return (
    <div style={{width:"190vh",marginLeft:"5vh",marginTop:"20px"}}>
    <nav class="navbar navbar-expand-lg ">
      <a class="navbar-brand" href="#"style={{paddingLeft:"20px",color:"black"}}> 
        LAUNDROMAT
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/" style={{color:"black"}}>
              Home
            </a>
          </li>
        </ul>
        <span class="navbar-text" style={{position:"absolute",right:"20px"}}>
          <Avatar
            src="https://img.freepik.com/premium-vector/user-icon_126283-435.jpg?w=2000"
            alt="Profile Picture"
            sx={{ width: 40, height: 40 }}
          />
        </span>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
