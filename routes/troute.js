const{
 getTaskByUsercontroler
}=require('../controler/taskusercontroler');
const taskRouter = require('./taskRoutes');

const userRouter=require('express').Router();


taskRouter
.route('/:id')
.get(getTaskByIdcontroler)

module.exports = taskRouter
