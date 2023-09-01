const categoryController= require('../controllers/categoryController');
const categoryRouter= require('express').Router();


categoryRouter
    .post('/createCategory', categoryController.register_category)
    .get('/categoriesNames', categoryController.get_categories_names)
    .get('/:name', categoryController.get_category);



module.exports = categoryRouter;