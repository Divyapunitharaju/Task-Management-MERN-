const express=require('express')
require('dotenv').config()
const mongoose=require('mongoose')
const app=express()
const taskroutes=require('./routes/TaskRoutes')

mongoose
.connect(process.env.MONGOOSE_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(` Database connected successfully in port ${process.env.PORT}`)
    })
})

.catch((err)=>{
    console.log(err)
})

//Middleware
app.use((req,res,next)=>{
    console.log('path '+ req.path + 'method ' + req.method)
    next()
})

app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send('Hello Hi ')
// })

app.use('/api/tasks',taskroutes)



