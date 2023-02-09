import React, { useState } from 'react'

import Records2 from "./Location2.json";
import { Link } from 'react-router-dom'
import Navbar from "./Navbar"
import Select from "react-select";

const Home = ({Setvalue,Setlocate}) => {
  const [uname,setUname]=useState({
    name:"",
    value:""

  });

 

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    console.log(name,value);
    Setlocate(value)
    // setUname({ ...uname, [name]: value });
    
    
 }
const handleChangeBlood=(e)=>{
    const name1=e.target.name;
    const value1=e.target.value;
    console.log(value1)
    Setvalue(value1)
    // setUname({ ...uname, [name]: value });
    
   
 }

 


  return (
    <>
    <Navbar/>
   
    
          <div className="bodypart">
          <div className="firsttheme">
    Donate the Blood, Save the Life
          </div>
          <div className="secondtheme">
    Search the Donars
    <p></p>
          </div>
          <div className="frontform">
            <form>
              <select  onfocus='this.size=10;' 
              onChange={handleChange} 
onblur='this.size=1;' 
 id='location' >
                <option value="0">--Locations--</option>
                {
                  Records2.map((currentElement)=>{
                    return(
                      <option name="locat">{currentElement.name}</option>
                    )
                  })
                }
                
              </select>
              <select id="bloodgroup" name='bloodgroup' className='bloodclass' onChange={handleChangeBlood}>
                <option value="0">--Blood Group--</option>
                <option value="A+" >A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
<div className="btn-home">

             <li><Link to="/donars"><button id='btn'>Search</button></Link></li>
              
</div>
            </form>
    
          </div>
        </div>
        
     
    
   
    
    </>
  )
}

export default Home

