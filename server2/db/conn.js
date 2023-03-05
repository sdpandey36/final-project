

const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/majordatabase",{ useNewUrlParser: true, useUnifiedTopology: true } ) 
.then(()=>console.log("connection successful"))
.catch((err)=>console.log(err));
