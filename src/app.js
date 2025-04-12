const express=require('express');
const app=express();

app.get('/user/:userId',(req,res)=>{
    console.log(req.params);
    res.send("user accessed")
})




app.listen(3000,()=>{
    console.log("server running on 3000")
})