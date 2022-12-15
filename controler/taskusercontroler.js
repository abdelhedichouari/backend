
const{
    getTaskByUserservice
}= require('../service/taskuser')

const getTaskByUsercontroler = async (req, res)=>{
         
    
    const id = req.params.id
    const task= await getTaskByUserservice(id)
    if(!task){
      return  res.status(StatusCodes.NOT_FOUND).send(`${id} : this is does not exist ,please check again`)
    }
    res.status(StatusCodes.OK).send(task)

 }
 module.exports={
    getTaskByUsercontroler
 }