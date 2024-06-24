const mongoose = require('mongoose')
const taskModel=require('../models/TaskModel')
const TaskModel = require('../models/TaskModel')

const createTask=async(req,res)=>{

     const {title,desc}=req.body
     try{
        const task=await taskModel.create({title,desc})
        res.status(200).json(task)

     }
     catch(e){
        res.status(400).json({err:e.message})
     }
}

const getTask=async(req,res)=>{
    try{
        const tasks=await taskModel.find({})
        res.status(200).json(tasks)
    }
    catch(e){
        res.status(400).json({err:e.message})

    }

}


const getSingleTask=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"Task not found"})
    }

    try{
        const singleTask=await taskModel.findById(id)
        res.status(200).json(singleTask)
    }
    catch(e){
         res.status(404).json({err:e.message})
    }
}

const updateTask=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"Type is not found"})
    }
    try{
       const task=await taskModel.findByIdAndUpdate({
        _id:id
       },{
        ...req.body
       })
       res.status(200).json(task)
    }
    catch(e){
        res.status(400).json({err:e.message})
    }
    
}
const deleteTask=async(req,res)=>{
    const {id}=req.params
  if(!mongoose.Types.ObjectId.isValid(id))
  {
    return res.status(404).json({error:"Type not found"})
  }
  try{
      const task=await TaskModel.findByIdAndDelete(id)
      res.status(200).json(task)
  }
  catch(e){
       res.status(400).json({err:e.message})
  }
}

module.exports={createTask,getTask,getSingleTask,updateTask,deleteTask}