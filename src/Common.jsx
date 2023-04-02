import React from 'react'
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from "../src/images/1.png"

const Common =(props)=>{
    return (
    <>     
    <h1>
     <section id="header" className="d-flex align-items-centre">
     <div className="container-fluid ">
         <div className="row">
            <div className="col-10 mx-auto">
               <div className='row'>
                    <div className='col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-centre flex-column'>
                       <h1> {props.name}
                            <strong className='brand-name'>    MyProject</strong>
                        </h1>
                        <h2 className='my-3'>
                       I am a lazy developer
                         </h2>
                        <div className='mt-3'>
                          <NavLink to={props.visit}className="btn-get-started">{props.btname}</NavLink>
                        </div>
                   </div>
                
            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
         </div>
     </div>
     </div>
            </div>
            </div>
              </section>
    </h1>
       </>
    );
};
export default Common;