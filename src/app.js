const express=require('express');
const connectDB=require('./config/database');
const app=express();
const User=require('./models/user')


app.post('/signup',async(req,res)=>{
 
    /*const user=new User({
        firstName:"rishabh",
        lastName:"porwal",
        emailId:"rish@gmail.com",
        password:"rish123"
    });*/
    const {firstName,lastName,emailId,password}=req.body;
    console.log("not destruct")
    const user=new User({
        firstName,
        lastName,
        emailId,
        password
    })
   await  user.save();
    console.log(user);
    res.send("user added")
})


connectDB().then(()=>{
    console.log("db connected succesfully")
    app.listen(3000,()=>{
        console.log("server running on 3000")
    })
}).catch((err)=>{
    console.log(err);
})

