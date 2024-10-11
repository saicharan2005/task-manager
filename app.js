

const express= require('express');

const app = express();
const task=require('./routes/task.js')

//database connection
const connectDb=require('./data-base/connect.js')
require('dotenv').config()


//middle ware

app.use(express.static('./public'))
app.use(express.json())






app.use('/api/v1/tasks',task)


// get all the task(get request)
  

//create a new task(send request)


//get a single task (get request)


//update the task(update request)


//delete the task(delete request)




const start =async ()=>{
  try {
    await connectDb(process.env.MONGO_URI)
    app.listen(port, console.log(`server is loading on port ${port}.......`))
  } catch (error) {
    console.log(error);
    
  }
}


const port=5000
// app.listen(5000,()=>{
//   console.log("server is started .......")
// })


start()