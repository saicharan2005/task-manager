const Task = require('../models/task.js')



const getAlltasks = async (req,res)=>{
  try {
    const task=await Task.find({});
    res.status(201).json({task})

    
  } catch (error) {
    res.status(500).json({msg:error})
  }
}


const createTask = async (req,res)=>{
  try {
    const task = await Task.create(req.body)
    res.status(201).json({task})
  } catch (error) {
    res.status(500).json({msg:error})
  }
  
}

const singleTask = async (req,res)=>{

  try {
    const {id:taskID}=req.params
    const task= await Task.findOne({ _id:taskID});
   

    if(!task){
      return res.status(404).json({msg:`no task with the id ${taskID}`})
    }
 res.status(200).json({task})
    
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

const  updateTask= async (req,res)=>{
 
  

  try {
   const {id:taskID} =req.params;
   //without options object
    /*const  task = await Task.findOneAndUpdate({_id:id},req.body) */

    // with opitons obect
    const  task = await Task.findOneAndUpdate({_id:taskID},req.body,{
      new:true,
      runValidator:true
    })

    
    if(!task){
      return res.status(404).json({msg:`no task with the id ${taskID}`})
    }
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg:error});
    
  }
}

const deleteTask = async (req,res)=>{
  try {
    const {id:taskID} =req.params
    const task = await Task.findOneAndDelete({_id:taskID} );
   
    if(!task){
      return res.status(404).json({msg:`the task not found for this id ${taskID}`})
    }
    res.status(200).json({task});  //this is for the verifying in the postmon
    //but we need only the success msg that task is deeted; bellow

    // res.status(200).send();
    // res.status(200).json({task:null,status:'success'})
    
  } catch (error) {
    res.status(500).json({msg:error})
    
  }
}


module.exports ={getAlltasks,
                createTask,
                singleTask,
                updateTask,
                deleteTask
}