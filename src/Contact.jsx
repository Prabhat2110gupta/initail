import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useState } from 'react';

const Contact =()=>{
    const [data,setDate]=useState({
        fullName:"",
        phone:"",
        email:"",
        msg:"",
    });
    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setDate((preVal)=>{
            return {
            ...preVal,
            [name]:value,
            };
        });
    };

    const formSubmit=(e)=>{
       e.preventDefault();
       alert(` My full name is ${data.fullName} and my phone number is ${data.phone} ,my email address is ${data.email} ,my message is ${data.msg}`);

    };
    return (
    <>     
    <div className='my-5'>
        <h1 style={{textAlign: "center"}}>Contact us</h1>

    </div>
    <div className='continer contact_div'>
        <div className=' row'>
            <div className='col-md-6 col-10 mx-auto'>
                <form onSubmit={formSubmit}>
            <div className="mb-3">
           <label for="exampleFormControlInput1" class="form-label">
           Full Name
            </label>
           <input 
           type="text" 
           className="form-control" 
           id="exampleFormControlInput1" 
            name="fullName"
           value={data.fullName}
           onChange={InputEvent}
           placeholder="enter your name" />
           </div>
           <div className="mb-3">
           <label for="exampleFormControlInput1" class="form-label">
            Phone number
            </label>
           <input 
           type="Numer" 
           className="form-control" 
           id="exampleFormControlInput1" 
            name="phone"
           value={data.phone}
           onChange={InputEvent}
           placeholder="mobile" />
           </div>
           <div className="mb-3">
           <label for="exampleFormControlInput1" class="form-label">
            Email address
            </label>
           <input 
           type="email" 
           className="form-control" 
           id="exampleFormControlInput1" 
           name="email"
           value={data.email}
           onChange={InputEvent}
           placeholder="name@example.com" />
           </div>
           
        <div className="mb-3">
      <label for="exampleFormControlTextarea1" className="form-label">Example textarea
     
        </label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
   name="msg"
   value={data.msg}
   onChange={InputEvent}></textarea>
</div>
<div class="col-auto">
    <button type="submit" class="btn btn-outline-primary">submit</button>
  </div>
  </form>
            </div>
        </div>
    </div>
       </>
    );
};
export default Contact;