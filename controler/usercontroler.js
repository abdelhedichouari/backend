const {
    createUserservice,
    getUserservice,
    getUserByIdservice,
    updateUserservice,
    deletUserService,
    getuserbyemailservice
 }= require('../service/users')
 const customError = require('../shared-services/errors')
 const {StatusCodes} = require('http-status-codes')

 const createUserControler = async (req, res)=>{ 

    console.log('controller --user');
    // getting the body data 
const {name, username,email, adresse } = req.body;
const user= await createUserservice({name, username, email,adresse})
// sending back  the result
if (name){
    throw new customError.BadRequestError('please provide your name')
}
const isEmailExist = await getuserbyemailservice(email);
if(isEmailExist){
    throw new customError.BadRequestError('this email is already exist, please enter another email')
}
await createUserservice ({username,name,adresse,email
})
res.status(StatusCodes.CREATED).send(`HI, ${username}, your account is created succefully`);




}
const getUsercontroler = async (req, res) =>{
 
        
   
    const user = await getUserservice()
     res.status(StatusCodes.OK).send(user)
}

 const getUserByIdcontroler = async (req, res)=>{
    const id = req.params.id
    const user = await getUserByIdservice(id)
    if(!user){
      return  res.status(StatusCodes.NOT_FOUND).send(`${id} : this is does not exist ,please check again`)
    }
    res.status(StatusCodes.OK).send(user)

 }

 const updateUsercontroler = async (req, res) =>{
    console.log(req.params)
        
    const{
        body:{name, username,  adresse, email},
        params: {id: id}
    }= req
    if (!username){
        throw new customError.BadRequestError('please provide a name')
    }
    if (isEmailExist){
        throw new customError.BadRequestError('this email is already exist, please chose auther email')

    }
     const user = await updateUserservice (id, {username,adresse,email,name});
     if (!user){
        throw new customError.NotFoundError('please check again , user not found')

     }
     res.status(StatusCodes.OK).send('your acount is update succefully')


}

  
const deletUsercontroler = async (req, res) =>{
          
    const id = req.params.id
    const user =await deletUserService(id)
    if(!user){
        throw new customError.NotFoundError('please check again, it seems that this user is not found')
    }
    res.status(StatusCodes.OK).send('your acount is update  succefully')


}

module.exports={
    createUserControler,
    getUsercontroler,
    getUserByIdcontroler,
    deletUsercontroler,
    updateUsercontroler

}