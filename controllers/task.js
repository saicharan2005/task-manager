const Task = require('../methods/task.js')



const getAlltasks = (req,res)=>{
  res.send(" get all  the items")
}


const createTask = async (req,res)=>{
  const task = await Task.create(req.body)

  res.status(201).json({task})
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