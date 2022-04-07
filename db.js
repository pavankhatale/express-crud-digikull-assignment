const mongoose = require("mongoose")

const mongoURI = "mongodb://localhost:27017/crud"

const connection =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("mongoDb is connected")
    })
}
module.exports = connection;
