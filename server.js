require('dotenv').config();
const app = require('./src/app.js');
const connectDb = require('./src/configs/db.js');



app.listen(process.env.PORT,()=>{
    console.log(`Server is Running Now with Port ${process.env.PORT}`);
    connectDb();
})