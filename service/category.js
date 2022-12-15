const category = require('../models/category')




const createCategoryService = (data)=>{
    return category.create(data)
}

const getCategoryByIdService = (id)=>{
    return category.findById({_id: id})

}
const updateCategoryservice = (id, name)=>{
    return category.findByIdAndUpdate({_id: id}, data);
}
const deletecategoryService = (id)=>{
    return category.findByIdAndDelete({_id: id})
}

module.exports={
    createCategoryService,
    getCategoryByIdService,
    updateCategoryservice,
    deletecategoryService
}