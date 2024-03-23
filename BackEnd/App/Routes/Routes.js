const Express = require('express')
const Router = Express.Router()
const {uploadImage,get,getImage} = require('../Controller/imageController')
const multer = require('multer');

const storage = multer.diskStorage({});

const upload = multer({ storage });



Router.get('/get',get)
Router.post('/upload', upload.single('image'),uploadImage)
Router.get('/getallimage',getImage)



module.exports = Router