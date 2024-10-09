const mongoose = require('mongoose')


const connectionString =``

//place connection string here




const connectDb = (url)=>{
    return mongoose
.connect( connectionString)
.then(()=>console.log("connected sucessful")
)
}

module.exports=connectDb


  