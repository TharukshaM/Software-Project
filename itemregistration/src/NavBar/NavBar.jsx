import React from "react";
import { Link } from "react-router-dom";



export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary"style={{backgroundColor:"#0d6efd"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            LAUNDROMAT
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
            <Link className="btn btn-outline-light" to="/additem">
              ADDITEMS
            </Link>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
