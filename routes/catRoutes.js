const{
    createCategoryControler,
    getCategoryByIdcontroler,
   updateCategorycontroler,
    deletCategorycontroler
 }=require('../controler/categorycontroler')

 const categoryRouter=require('express').Router();

 
 categoryRouter.route('/').post(createCategoryControler);

 categoryRouter 
.route('/:id') 
.get(getCategoryByIdcontroler)
.patch(updateCategorycontroler)
.delete(deletCategorycontroler);

module.exports =categoryRouter;
