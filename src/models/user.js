const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:4,
      },
      lastName:{
        type:String,
        //required:true,
      },
      emailId:{
        type:String,
        required:true,
        unique:true,
        trim:true,
      },
      password:{
        type:String,
        required:true
      },
      age:{
        type:Number,
        min:18,
      },
      gender:{
        type:String,
        validate(value){
          if(!["male","female"].includes(value)){
            throw new Error("gender data is not valid")
          }
        }
      },
      photoUrl:{
        type:String,
        default:"https://tse4.mm.bing.net/th?id=OIP.ed0RqUUqkqGszO7DikXhagAAAA&pid=Api&P=0&h=180"
      },
      about:{
        type:String,
        default:"I am software engineer"
      },
      skills:{
        type:[String]
      },
     
},{timestamps:true})


const User=mongoose.model("User",userSchema);
module.exports=User;