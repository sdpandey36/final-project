const express=require("express");

const router= express.Router();
require("../db/conn");
const User=require("../model/userSchema");

router.get("/",(req,res)=>{
res.send("from auth.js");
});

// console.log(req.body);
// res.json({message:req.body});
// res.send("my registration page.")

// router.post("/register",(req,res)=>{
//     const { name,email,phone,work,password,cpassword}=req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return  res.status(422).json({error:"Please filled the field properly"}) ;
    
//     }

//     User.findOne({email:email})
//     .then((userExist) =>{
//         if(userExist){
//             return  res.status(422).json({error:"Email already exist"}) 
            
//         }
//         const user=new User({name,email,phone,work,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfuly"});
//         }).catch((err)=>res.status(500).json({error:"Failed to registered"}));

//     }).catch(err=>{console.log(err);});
    


// });


router.post("/register",async(req,res)=>{
    const { fullname,email,address,number,dateofbirth,dateoflastdonate,bloodgroup,gender}=req.body;
    if(!fullname || !email || !address || !number || !dateofbirth || !dateoflastdonate ||  !bloodgroup || !gender){
        return  res.status(422).json({error:"Please filled the field properly"}) ;
    
    }
    try{
        const userExist=await User.findOne({email:email})
        
            if(userExist){
                return  res.status(422).json({error:"Email already exist"}) 
                
            }
            const user=new User({fullname,email,address,number,dateofbirth,dateoflastdonate,bloodgroup,gender});
    
            await user.save();
                res.status(201).json({message:"user registered successfuly"});
           
    
        

    }
    catch(err){console.log(err);

    }

    


});

module.exports=router;
