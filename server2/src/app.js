const mongoose=require("mongoose");
const express=require("express");
const app=express();
const port=6003;

require("../db/conn");

app.use(express.json());
app.use(require("../router/auth"));

const User=require("../model/userSchema");



const middleware=(req,res,next)=>{
    console.log("this is middleware")
    next();
}
app.get("/",(req,res)=>{
    res.send("index")
})
app.get("/about",middleware,(req,res)=>{
    console.log("my name is middleware")
    res.send("about")
})
app.get("/weather",(req,res)=>{
    res.send("weather")
})

app.get("/getAllUser",async(req,res)=>{
    try{
        const allUser=await User.find({});
        console.log(allUser)
        res.send({data:allUser})

    }catch(err){
console.log(err)
    }

    
})



app.listen(port,()=>{
    console.log(`Listening to the port ${port}`)
})