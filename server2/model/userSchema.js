
const mongoose=require("mongoose");
const playList=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
     address:{
        type:String,
        required:true
    }, 
    number:{
        type:Number,
        required:true
    },
    dateofbirth:{
        type:Date,
        required:true
    },
    dateoflastdonate:{
        type:Date,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
   
   
})
const Playlist=mongoose.model("Playlist",playList)



module.exports=Playlist;