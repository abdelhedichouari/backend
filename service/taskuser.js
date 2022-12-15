
const Task = require('../models/taskModel');
const User = require('../models/usersModel');

const getTaskByUserservice =()=>{
    const task =Task.findById({User: User})
    return task;
}
module.exports={
    getTaskByUserservice
}