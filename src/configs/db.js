const mongoose = require('mongoose');

function connectDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then((res)=>{
        console.log('MongoDb is Connected Successfully');
    })
    .catch((err)=>{
        console.log('MongoDb Connection Error '+ err)
        process.exit(1);
    });
}

module.exports = connectDb;