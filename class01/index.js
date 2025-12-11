import express from "express"
let app = express()

app.get('/', (req, res)=>{
    res.send({name: "minahil", email: "duashaikh603@gmail.com"})
})

app.listen(3000, ()=>{
    console.log("server is running on port")
})