const express = require('express')
const {connectDB} = require('./config/db')
const userRoutes = require('./Routes/userRoutes')
const app = express()


require('dotenv').config()

app.use(express.json())
app.use('/user', userRoutes)





connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running at ${process.env.PORT}`)
    })
})
.catch((err)=> console.log(err.message))


