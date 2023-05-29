const Router = require('express')
const router = new Router()
const sneakersController = require('../controllers/sneakersController')

router.post('/', sneakersController.create)
router.get('/', sneakersController.getAll)
router.get('/:id_sneakers', sneakersController.getOne)

module.exports = router