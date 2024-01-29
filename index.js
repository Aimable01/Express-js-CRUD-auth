const express = require('express')
const app = express()


const dotenv = require('dotenv')
dotenv.config()


//import the routes
const authRoute = require('./routes/auth')
app.use('/api/user', authRoute)
app.use(express.json())
app.use('/api/auth',require('./Auth/route'))


//connect to mongodb
const mongoose = require('mongoose')
mongoose.set("strictQuery",false)
mongoose.connect(process.env.DB_CONNECT)
.then(()=>{
   console.log('Connected to mongodb')
   app.listen(3000,()=> console.log('Server up and running'))
}).catch(error =>{
    console.log("Failed to connect to mongo db")
})