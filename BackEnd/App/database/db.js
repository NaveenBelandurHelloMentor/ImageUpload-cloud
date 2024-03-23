const mongoose = require('mongoose')

const SetUpDb = async()=>{
    try{
    const connect = await mongoose.connect(`mongodb+srv://Naveen:${process.env.DATABASE_PWD}@cluster0.rrtnxw8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    `)
    if(connect){
        console.log(`Connected to the DataBase`)
    }
    }
    catch(err){
        throw new MongoError(err.message)
    }
}

module.exports = SetUpDb