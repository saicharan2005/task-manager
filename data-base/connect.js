const mongoose = require('mongoose')


const connectionString =``

//place connection string here






mongoose
.connect( connectionString)
.then(()=>console.log("connected sucessful")
  ).catch((err)=>{
  console.log(err);
  
})