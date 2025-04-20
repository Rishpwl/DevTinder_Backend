const express=require('express');
const connectDB=require('./config/database');
const app=express();
const User=require('./models/user')
app.use(express.json());

app.post('/signup',async(req,res)=>{
 
    /*const user=new User({
        firstName:"rishabh",
        lastName:"porwal",
        emailId:"rish@gmail.com",
        password:"rish123"
    });*/
  
    
    const user=new User(req.body);
   await  user.save();
    console.log(user);
    res.send("user added")
})

app.get('/feed',async(req,res)=>{
    try{
        const users=await User.find({});
       //console.log(user);
        res.send(users)
    }catch(err){
        console.log(err);
    }

})


app.delete('/user',async(req,res)=>{
    try{
        const userId=req.body.userId;
        const deleteuser=await User.findByIdAndDelete(userId);
        res.send("user deleted");
    }catch(err){
        console.log(err);
    }

})

app.patch('/user/:userId',async(req,res)=>{
    const userId=req.params.userId;
const data=req.body;

    try{

const Allowed_Updatees=["photoUrl","about","gender","age","skills"];

const isUpdatedAllowed=Object.keys(data).every((k)=>
Allowed_Updatees.includes(k));

if(!isUpdatedAllowed){
    throw new Error("update not allowed");
}

const updateUser=await User.findByIdAndUpdate({_id:userId},data,{runValidators:true});
console.log(updateUser);
res.send('user updated successfully');
    }catch(err){
       console.log(err);
    }
})

connectDB().then(()=>{
    console.log("db connected succesfully")
    app.listen(3000,()=>{
        console.log("server running on 3000")
    })
}).catch((err)=>{
    console.log(err);
})

