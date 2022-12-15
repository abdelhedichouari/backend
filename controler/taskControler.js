const {
    createtaskservice,
  
    getTasksService,
  
    getTaskByIdUserservice,
    updateTaskByIdUserService,
    deleteTaskByIdUserService
}= require('../service/tasksServices')
const customError = require('../shared-services/errors')
const {StatusCodes} = require('http-status-codes');
const { getUserByIdcontroler } = require('./usercontroler');
const { getUserByIdservice } = require('../service/users');
const { query } = require('express');



/** Create task
 * 
 * @param {*} req coming the client
 * @param {*} res output from the server
 */
const createtaskControler = async (req, res)=>{ 

    
        // getting the body data 
    const {name, description,completed,user,category} = req.body;
   if (category && category== !""){
    const isCategoryExist = await getCategoryByIdservice(category);
    
    if(!isCategoryExist){
        throw new customError.NotFoundError('this category is not exist')
    }
   }
   
   const isUserExist = await getUserByIdservice(user);
    
    if(!isUserExist){

        throw new customError.NotFoundError('this user is not exist');
    }
   
    // sending back  the result
   
  
    if(!name){
        throw new customError.BadRequestError('Please provide the name')
    }
    const task= await createtaskservice({name, description,completed,user,category})
    res.status (StatusCodes.CREATED).send(task);

    
}
const getTaskscontroler = async (req, res) =>{
 const user = req.query.user 
 const isUserExist =await getTaskByIdUserservice(user);
 if(!isUserExist){
    throw new customError.NotFoundError('user does not exist');
 }

    const tasks = await getTasksService(user)
     res.status(StatusCodes.OK).send(tasks)
    // res.status(StatusCodes.OK).send({
    //     success : true,

    //    nbhits: tasks.length,
    //    tasks
    // })


}
 const getTaskByIdcontroler = async (req, res)=>{
    const id = req.params.id;
    const user =req.query.user
         
    const isUserExist =await getTaskByIdUserservice(user)
  if(!isUserExist){
    throw new customError.NotFoundError('user not found')
  }
  const task = await getTaskByIdUserservice(id, user)
    if(!task){
        throw new customError.NotFoundError(
    `${id} : this is does not exist ,please check again`);
    }
    res.status(StatusCodes.OK).send(task)

 }
 const updateTaskcontroler = async (req, res) =>{
    
        
        const{
            body:{name, completed, description,category},
            params: {id: id},
            query: {user: user}
        }= req
        if(!name){
            throw new customError.BadRequestError('please provide a name for your task')
        }
        // TO DO check
        const isCategoryExist = await getCategoryByIdservice(category)
            if(!isCategoryExist){
            throw new customError.NotFoundError('category not found');
         }
        
        
         const isUserExist = await getUserByIdservice(user)
            if(!isUserExist){
            throw new customError.NotFoundError('user not found, please provide user');
         }
         const task = await updateTaskByIdUserService (id, user, {name,  completed, description, category});
         if (!task){
            return res.status(StatusCodes.NOT_FOUND)
            .send('${id} : this id does not exist, please check again')
         }
         res.status(StatusCodes.OK).send(task)
   
   
}
    // const id = req .parms.id 
    // const data = req .body
  
        
        const delettaskcontroler = async (req, res) =>{

          
           const id = req.params.id
           const user = req.query.user;
           const isUserExist = await getUserByIdservice(user)
           if(!isUserExist){
           throw new customError.NotFoundError('user not found, please provide user');
        }
    
           const task =await deleteTaskByIdUserService(id, user)
           if (!task){
            throw new customError.NotFoundError('task not found')
           }
           res.status(StatusCodes.OK).send(task)
    

 }
 module.exports ={
    createtaskControler,
    getTaskByIdcontroler,
    updateTaskcontroler,
    delettaskcontroler,
    getTaskscontroler,
 }