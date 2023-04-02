import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=()=>{
    return(
<>
<div className="container-fluid nav_bg">
  <div className="row">
    <div className="col-10 mx-auto">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Myproject</NavLink>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="./about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="./service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="./contact">Contact</NavLink>
        </li>
      
       </ul>
     
    </div>
  </div>
</nav>
</div>
  </div>
</div>
</>
    );
}
export default Navbar;