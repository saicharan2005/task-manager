const app = require('express')();

// routes
app.get('/',(req,res)=>{
  res.status(200).send("hello")
})


// get all the task(get request)
  

//create a new task(send request)


//get a single task (get request)


//update the task(update request)


//delete the task(delete request)





const port=5000
// app.listen(5000,()=>{
//   console.log("server is started .......")
// })

app.listen(port, console.log(`server is loading on port ${port}.......`))