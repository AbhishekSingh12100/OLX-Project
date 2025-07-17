const mongoose = require ("mongoose");
const connectDB = async ()=>{
  try{
    await mongoose
    .connect("mongodb+srv://AbhishekSingh:<db_password>@cluster0.okhhml5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      
    
    )
    .then(() =>console.log("DB Connected Successfully"))
    .catch((err)=> console.error("DB Error:",err));
  }catch(err){
    console.error("DB Error:",err);
  }
};
module.exports=connectDB 