const mongoose = require('mongoose');


const db = () =>{
    try{
        mongoose.connect(process.env.MONGO_URI)
        .then(res => console.log("DB Connected"))
        .catch((err)=> console.error(err)) 
    }   
    catch(err){
        console.log(err)
    }
}


module.exports=db;