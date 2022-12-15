const {
    createUserControler,
    getUserByIdcontroler,
    deletUsercontroler,
    updateUsercontroler,
    getUsercontroler
 }= require('../controler/usercontroler');

 const userRouter=require('express').Router();

 userRouter.route('/').post(createUserControler).get(getUsercontroler);

 userRouter 
.route('/:id') 

.get(getUserByIdcontroler)
.patch(updateUsercontroler)
.delete(deletUsercontroler);

module.exports =userRouter;

 