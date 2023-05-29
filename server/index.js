require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

//Обработка ошибок
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate() //уст подключение к бд
        await sequelize.sync() // сверяет бд с описанной схемой
        app.listen(PORT, ()=> console.log('Server started.'))
    } catch (e){
        console.log(e)
    }
}

start()