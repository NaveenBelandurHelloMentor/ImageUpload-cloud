const Express = require('express')
const env = require('dotenv').config()
const Port = process.env.Port || 8000
const App = Express()
const Router = require('./App/Routes/Routes')
const SetUpDb = require('./App/database/db')
const cors = require('cors')


App.use(cors())
App.use('/',Router)
App.use(Express.json())
App.use(Express.urlencoded({ extended: true }));

 SetUpDb()





App.listen(Port,()=>{
    console.log('Connected to the Port',Port)
})
