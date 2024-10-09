const mongoose = require('mongoose')




const connectDb = (url)=>{
    return mongoose
.connect( url)
.then(()=>console.log("connected sucessful")
)
}

module.exports=connectDb


  