const User = require('../models/usersModel');

const createUserservice = (data)=>{
    // declaration variable
    // return variable
    console.log(data);
   const user = User.create(data);
   return user;
}
const getuserbyemailservice = (email)=>{
    return User.findOne ({email: email})
}


const getUserservice =()=>{
    const user =User.find({})
    return user;
}
const getUserByIdservice =(id)=>{
    const user =User.findById({_id: id})
    return user;

}

const updateUserservice = (id, data) =>{
    const user = User.findByIdAndUpdate(
        {_id : id},
        data,
        {new: true, runValidators: true}
    )
    return user;
}

const deletUserService = (id)=>{
    const user =User.findByIdAndDelete({_id : id})

    return user
}
 module.exports={
    createUserservice,
    getUserservice,
    getUserByIdservice,
    updateUserservice,
    getuserbyemailservice,
    deletUserService
 }