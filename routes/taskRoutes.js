const {
    createtaskControler,
    getTaskByIdcontroler,
    updateTaskcontroler,
    delettaskcontroler,
    getTaskscontroler
} = require('../controler/taskControler')
const taskRouter = require('express').Router();

//  taskRouter.get('/', getTaskscontroler)
//  taskRouter.post('/'.createtaskControler)

taskRouter.route('/').get(getTaskscontroler).post(createtaskControler);

taskRouter
    .route('/:id')
    .get(getTaskByIdcontroler)
    .patch(updateTaskcontroler)
    .delete(delettaskcontroler);

module.exports = taskRouter;
