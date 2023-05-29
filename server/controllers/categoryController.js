const {Category} = require('../models/models')
const ApiError = require('../error/ApiError');

class CategoryController{
    async getCategories(req, res) {
        const categories = await Category.findAll()
        return res.json(categories)
    }

    async createCategory(req, res) {
        const {category_name} = req.body
        const category = await Category.create({category_name})
        return res.json(category)
    }
}

module.exports = new CategoryController()