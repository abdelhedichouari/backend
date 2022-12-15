const Task = require('../models/taskModel');
/**
 * ! creat a new task in database
 * @param {*} data of the model task
 * 
 * @returns a task document
 */

const createtaskservice = (data)=>{
    // declaration variable
    // return variable
   const task = Task.create(data);
   return task;
}

const getTasksService = ()=>{
    const tasks = Task.find({user: user});
    return tasks
}
/**
 * 
 * @param {*} id of the task
 * @returns  one task
 */
const getTaskByIdservice =(id)=>{
    const task =Task.findById({_id: id})
    return task;
}
/**
 * 
 * @param {*} id of task
 * @param {*} data objet a modifier
 * @returns  task modifier
 */
const updateTaskservice = (id, data) =>{
    const task = Task.findByIdAndUpdate(
        {_id : id},
        data,
        {new: true, runValidators: true}
    )
    return task;
}
/**
 * Delete task
 * @param {*} id of task
 * @returns  delet task
 */
const delettaskService = (id)=>{
    const task =Task.findByIdAndDelete({_id : id})

    return task

}
/**
 * get task by id user service
 * 
 * @param id
 * @param user
 * returns task by id user service
 */
const getTaskByIdUserservice = (id, user)=>{
    const task =Task.findOne({_id: id, user: user});
    return task
    
}
/**
 * 
 * @param {*} id 
 * @param {*} user 
 * @param {*} data 
 * @returns 
 */
const updateTaskByIdUserService = (id, user, data)=>{
const task =Task.findByIdAndUpdate(
    {_id: id, user:user},
    data,
    {new : true,runValidators : true}
)
return task
}
const deleteTaskByIdUserService = (id,user)=>{
    return Task.findByIdAndDelete({_id: id,user: user})
}

module.exports={
    createtaskservice,
    getTaskByIdservice,
    getTasksService,
    updateTaskservice,
    delettaskService,
    getTaskByIdUserservice,
    updateTaskByIdUserService,
    deleteTaskByIdUserService
}