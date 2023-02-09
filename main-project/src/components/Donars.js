// In this tutorial we will learn about fetch api 
// async makess a function return a promise 
// await makes a function wait for a promise

import React from 'react';
import data from "./DonarList.json";
// import Button from 'react-bootstrap/Button';
import { Button, message } from 'antd';

import { Link } from 'react-router-dom';



import Navbar from './Navbar';

const Donars = ({blood, onChange }) => {
    const sendEmail = async (e) => {
        // const {email}=user;
        e.preventDefault();
        messageApi.info('Messege was sent to Donars Successfully!');

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // email
            })
        });
        
    }
    const [messageApi, contextHolder] = message.useMessage();

    
 
    // here [] is useEffect hook dependency list (array) which makes a page render only one time ie when we open page

   
    
// const blood=props.blood;

const onClickHandle = ( curElement) =>  {
    console.log("handle clicked");
    onChange(curElement.Location)
}
  
    
    return(
        <>
        <Navbar/>
      <div className="containerDonar">
          <h1>Donar List for {blood}</h1>
          
          {
             
              data.map((curElement)=>{
                  
              if(blood===curElement.BloodGroup){

             
                  return(
                      <div className="inside-containerDonar">
                  <h4>{curElement.Name}</h4>
                  <h4>{curElement.Contact}</h4>
                  <div className="main-contentDonar">
                      <div>Location={curElement.Location}</div>
                      <div>BloodGroup={curElement.BloodGroup}</div>
                     
                  </div>
                    
                   <Link to="/MapDirection"><button type='submit' onClick={()=> onClickHandle(curElement)} id='btn'>Direction</button></Link> 
               
                
                  </div>)
              }
             
          })
        }
  </div>
  <div >
  {contextHolder}
  < Button id="btn-donar"variant="primary" type="submit" onClick={sendEmail}>
                            Send
                        </Button>
  </div>
        </>
  )
 
   
}

export default Donars

