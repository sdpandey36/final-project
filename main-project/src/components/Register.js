
import {Form, Input} from "antd";
import { Button, Space } from 'antd';
import { useState } from 'react';
import { Link ,Routes, Route,useNavigate} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
// import Signin  from './Signin';

import {auth} from "../firebase";
import { async } from '@firebase/util';

const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 12,
  },
};





const Register = () => {

  const navigate=useNavigate();
  const [users,setUsers]=useState({
    Firstname:"",
    Lastname:"",
    Email:"",
    Password:"",
    cpassword:"",

  });

  const [errors,setErrors]=useState("");


const handleInput=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
  console.log(name,value);
  setUsers({...users,[name]:value});
  
}

const handleSubmit=()=>{
  if(!users.Firstname || !users.Lastname || !users.Email || !users.Password || !users.cpassword ){
    setErrors("Please fill data properly...");
    return;
    
  }else{
    setErrors("");
    createUserWithEmailAndPassword(auth,users.Email,users.Password).then(
     async (res)=>{
        // console.log(res);
        const user=res.user;
        await updateProfile(user,{
          displayName:users.Firstname
        })
     
        navigate("/Home");
        alert("Welcome ");
        
      }
    ).catch((err)=>{
      setErrors(err.message);
    });
  }
}





  return (
    <>
   
    {/* <Routes>
      <Route path='/signin' element={<Signin/> }></Route>

    </Routes> */}

<div className="welcome-text"><span id="welcome">Welcome to </span><span id="textcss">Quick Blood Finder</span></div>
    <div className='profile-container'>
        <Form  {...layout}  className="form-class">
            

            <Form.Item label="Firstname"> 
           <Input placeholder='Enter your firstname' name="Firstname" value={users.Firstname} onChange={handleInput}></Input>  </Form.Item> 
           



     
            <Form.Item label="Lastname" >
            
            
            <Input placeholder='Enter your Lastname' name="Lastname" value={users.Lastname} onChange={handleInput}></Input> </Form.Item>
            

            


            
             <Form.Item label="Email" > 
            
            <Input type='email' placeholder='Enter your Email'  name="Email" value={users.Email} onChange={handleInput}></Input></Form.Item> 

            
            
            <Form.Item label="Password" > 
            <Input type="password" placeholder='Enter your Password'name="Password"  value={users.Password} onChange={handleInput}></Input>
            </Form.Item> 
            
            
            <Form.Item label="Conform Password" > 
            <Input type="password" placeholder='Enter your conform password' name="cpassword" value={users.cpassword} onChange={handleInput}></Input>
            </Form.Item>
            <div className="errorMsg">{errors}</div>
            
            <Space wrap>
              <Button type='primary' className='btn-RegisterLogin' onClick={handleSubmit} >Register</Button>  </Space>
              <div className="signIn-container">or <Link to="/Login" >Sign in</Link></div>
        </Form>
    </div>
    </>
  )
}

export default Register