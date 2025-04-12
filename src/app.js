const express=require('express');
const app=express();

app.use('/user',(req,res,next)=>{
    //console.log(req.params);
    next();
    res.send("user accessed 1")
    
},
(req,res)=>{
    res.send("user accessed 2")
}

)




app.listen(3000,()=>{
    console.log("server running on 3000")
})