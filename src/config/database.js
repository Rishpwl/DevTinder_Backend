const mongoose=require('mongoose');

const connectDB=async()=>{
await mongoose.connect('mongodb+srv://rishabhporwal2001:6RSuZ08u3ppkpUEH@cluster0.3rjpvci.mongodb.net/Developer')
}

module.exports=connectDB;

