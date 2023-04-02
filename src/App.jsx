import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Navbar from './Navbar';
import Service from "./Service";
import Contact  from "./Contact";
import About  from "./About";
import {Routes, Route } from "react-router-dom";
import Footer from "./Footer";
const App =()=>{
    return (
    <>    
    <Navbar />
<Routes>
<Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/service" Component={Service} />
        <Route exact path="/contact" Component={Contact} />
</Routes>
<Footer />
    </>
    );
};
export default App;