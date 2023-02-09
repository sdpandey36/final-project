import React from 'react'
import {Form, Input} from "antd";
import { Button, Space } from 'antd';
import { useState } from 'react';

import {auth} from "../firebase";
import { Link ,useNavigate} from 'react-router-dom'
import { getAuth,signInWithEmailAndPassword} from "firebase/auth";

const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 12,
  },
};



const Login = () => {

    const navigate=useNavigate();
    const [users,setUsers]=useState({
      
      Email:"",
      Password:""
     
  
    });
  
    const [errors,setErrors]=useState("");
  
  
  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    console.log(name,value);
    setUsers({...users,[name]:value});
    
  }
  
  const handleSubmit=()=>{
    if(!users.Email || !users.Password ){
      setErrors("Please fill data properly...");
      return;
      
    }else{
      setErrors("");
      signInWithEmailAndPassword(auth,users.Email,users.Password).then(
       async (res)=>{
          // console.log(res);
         
          navigate("/Home");
          // alert("Welcome");
          
        }
      ).catch((err)=>{
        setErrors(err.message);
      });
    }
  }




  return (
    <>
   
   <div className="welcome-text"><span id="welcome">Welcome to </span><span id="textcss">Quick Blood Finder</span></div>

    <div className='profile-container'>
        <Form  {...layout}  className="form-class">
            

           
            


            
             <Form.Item label="Email" > 
            
            <Input type='email' placeholder='Enter your Email'  name="Email" value={users.Email} onChange={handleInput}></Input></Form.Item> 

            
            
            <Form.Item label="Password" > 
            <Input  type="password" placeholder='Enter your Password'name="Password"  value={users.Password} onChange={handleInput}></Input>
            </Form.Item> 
            
            
            <div className="errorMsg">{errors}</div>
            
            <Space wrap>
              <Button type='primary' className='btn-RegisterLogin' onClick={handleSubmit}>Log In</Button>  </Space>
              <div className="signIn-container">or <Link to="/" >Register</Link></div>
              
        </Form>
    </div>
    </>
  )
}

export default Login