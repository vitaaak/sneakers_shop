const {Sneakers} = require('../models/models')
const ApiError = require('../error/ApiError');

class SneakersController {
    async create(req, res, next) {
        try {
            let {name, article, material, description, price, img1, img2, img3, categoryId} = req.body

            const sneakers = await Sneakers.create({name,article, material, description, price, img1, img2, img3, categoryId});

            return res.json(sneakers)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {

        const sneakers = await Sneakers.findAll()
        return res.json(sneakers)
    }

    async getOne(req, res) {
        const {id_sneakers} = req.params
        const sneakers = await Sneakers.findOne({where: {id_sneakers}})
        return res.json(sneakers)
    }
}

module.exports = new SneakersController()