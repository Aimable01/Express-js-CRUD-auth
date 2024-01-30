const express = require('express')
const app = express()
const userroutes = require('./routes')


const dotenv = require('dotenv')
dotenv.config()

// app.use("")
app.use(express.json())
app.use('/api',userroutes)

const mongoose = require('mongoose')
mongoose.connect(process.env.DB_CONNECT)
.then(()=>{
    console.log('Connected to mongodb')
    app.listen(3000,()=>console.log('App running on port 3000'))
}).catch(err=>{
    console.log(`Error: ${err.message}`)
})