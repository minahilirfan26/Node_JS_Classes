import express from 'express'
import router from './routes/index.js'

let app = express()

app.listen(5000, ()=>{
    console.log("server is running on port")
})

app.use("/api", router)

app.get("/", (req, res)=>{
    res.send(new Date().toString())
})

