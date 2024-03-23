const mongoose = require('mongoose')

const uploadImage = new mongoose.Schema({
    image:{
        type:String
    }
})


const ImageUpload = mongoose.model('ImageUpload',uploadImage)

module.exports = ImageUpload