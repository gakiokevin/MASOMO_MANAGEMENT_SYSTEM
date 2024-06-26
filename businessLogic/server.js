require('dotenv').config()
const express = require('express')
const cors =  require('cors')
const mongoose = require('mongoose')
//all paths 
const courseRoutes = require('./routes/courses')
const  userRoutes = require('./routes/user')

const app = express()

//setting up middlewares
mongoose.connect(process.env.MONGO_DB_URI)

mongoose.connection.on('error', (error) => {
   console.error('MongoDB connection error:', error);
 });
 
 mongoose.connection.on('open', () => {
   console.log('MongoDB connection opened');
 });
 
 mongoose.connection.on('disconnected', () => {
   console.log('MongoDB disconnected');
 });


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//routes
app.use('/courses',courseRoutes)
app.use('/user',userRoutes)

app.listen(3000,()=>console.log('test now your apis'))