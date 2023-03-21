import React, { useState } from 'react';
//import  ReactDOM  from 'react';
//import React , {useState} from "react";
const App=()=>{
    const [name, setName]= useState("")
    const [fullName,setFullName]=useState()

    const inputEvent=(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
    };
    const onSubmit=()=>{
        setFullName(name);
    }
    return (
<>
<div>
    <h1>
        hello {fullName}
    </h1>
    <input type="text"  place holder ="enter your name"
    onChange={inputEvent}
    value={name}
     />
    <button onClick={onSubmit
    }> click me </button>

</div>
</>)
}
export default App;