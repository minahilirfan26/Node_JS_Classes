import express from 'express'
import router from './routes/index.js'
import mongoose from './db/index.js'

let app = express()
app.use(express.json())

mongoose.connection.on('error', (err)=>{
console.log("db is not connected")
})

mongoose.connection.on("open", ()=>{
console.log("db connected")
})

app.listen(5000, ()=>{
    console.log("server is running on port")
})

app.use("/api", router)

app.get("/", (req, res)=>{
    res.send(new Date().toString())
})

