const express = require('express');
const { getAlltasks, createTask, singleTask, updateTask, deleteTask } = require('../controllers/task');

const router =express.Router();

router.route('/').get(getAlltasks).post(createTask)
router.route('/:id').get(singleTask).patch(updateTask).delete(deleteTask) //we didn't set up any  controllers yet


module.exports=router