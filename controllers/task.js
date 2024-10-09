const getAlltasks = (req,res)=>{
  res.send(" get all  the items")
}

const createTask =(req,res)=>{
  res.send(" create task")
}

const singleTask =(req,res)=>{
  res.send("single task ")
}

const  updateTask=(req,res)=>{
  res.send("update task")
}

const deleteTask =(req,res)=>{
  res.send("delete task")
}


module.exports ={getAlltasks,
                createTask,
                singleTask,
                updateTask,
                deleteTask
}