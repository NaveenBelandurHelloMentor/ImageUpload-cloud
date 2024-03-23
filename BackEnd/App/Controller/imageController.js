
const cloudinary = require('cloudinary').v2;
const Image = require('../Model/Image')



cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
  });




module.exports.get= (req,res)=>{
    res.send('hello world')
}




module.exports.uploadImage =  async(req,res)=>{
    try{
     if(!req.file){
        return res.status(404).json({
            message:"Empty Image Cannot be Updated"
        })
     }

     const Result = await await cloudinary.uploader.upload(req.file.path);
     if(Result){
          const saveImage = new Image({
            image:Result.url
          })
       const save =  await saveImage.save()
       if(save){
        res.status(200).json({
            message:"Image Saved Succesfully",
            response:save
        })
       }
     }else{
        console.log('Image Upload error')
     }

    }
    catch(err){
        throw new ImageError(err.message)
    }
}

module.exports.getImage = async (req,res)=>{
    try{
       const GetAllImage = await Image.find()
       if(GetAllImage){
         return res.status(200).json({
            message:"Getting all the Images",
            GetAllImage
         })
       }
         
    }
    catch(err){
        throw new ImageError(err.message)
    }
}