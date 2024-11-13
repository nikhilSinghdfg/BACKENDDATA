
//require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import express from 'express';
import connectDB from './Db/DB.js';

const app=express()



dotenv.config({path:'./env'})


connectDB()













/*

;( async ()=>{
try {
    
await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
app.on('error',(error)=>{
    console.log('error:',error);
    throw error
})

app.listen(process.env.PORT,(req,res)=>{
console.log(`app is listening on port ${process.env.PORT}`);

})


} catch (error) {

    console.error('error:',error)
    throw error

}
})()

*/