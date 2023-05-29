const Router = require('express')
const router = new Router()
const categoryRouter = require('./categoryRouter')
const userRouter = require('./userRouter')
const shopAddressesRouter = require('./shopAddressesRouter')
const sneakersRouter = require('./sneakersRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/shop_addresses', shopAddressesRouter)
router.use('/sneakers', sneakersRouter)

module.exports = router