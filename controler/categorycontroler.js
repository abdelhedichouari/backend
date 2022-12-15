const{
    createCategoryService,
    getCategoryByIdService,
    updateCategoryservice,
    deletecategoryService
}=require('../service/category')
const CustomError = require('../shared-services/errors')
const {StatusCodes} = require('http-status-codes')

const createCategoryControler = async (req, res)=>{ 

    console.log('controller --user');
const {name,  } = req.body;
await createCategoryService ({name})
res.status(StatusCodes.CREATED).send(`HI, ${name}, ypur category is created succefully`);
}

const getCategoryByIdcontroler = async (req, res)=>{
    const id = req.params.id
    const Category = await getCategoryByIdService(id)
    if(!Category){
      return  res.status(StatusCodes.NOT_FOUND).send(`${id} : this is does not exist ,please check again`)
    }
    res.status(StatusCodes.OK).send(Category)


 }
 const updateCategorycontroler = async (req, res)=>{
    const{
        body:{ name},
        params: {id: id}
    }= req
    if (!name){
        throw new customError.BadRequestError('please provide a name')
    }
    const category = await updateCategoryservice (id, {name});
    if (!category){
       throw new customError.NotFoundError('please check again , user not found')

    }
    res.status(StatusCodes.OK).send('your acount is update succefully')
 }
 const deletCategorycontroler = async (req, res) =>{
          
    const id = req.params.id
    const category =await deletecategoryService(id)
    if(!category){
        throw new customError.NotFoundError('please check again, it seems that this user is not found')
    }
    res.status(StatusCodes.OK).send('your acount is update  succefully')


}
 module.exports={
    createCategoryControler,
    getCategoryByIdcontroler,
    updateCategorycontroler,
    deletCategorycontroler
 }