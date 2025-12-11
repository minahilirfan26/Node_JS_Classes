import express, { json } from 'express'

let app = express()
let users = []
app.use(express.json())

app.listen(4000, ()=>{
    console.log("server is running on port")
})

app.delete('/user/:id', (req, res)=>{
 let {id} = req.params;
 const index = users.findIndex(obj=> obj.id === id)
 users.splice(index, 1)
    res.send({message: "user deleted"})
})

app.put("/user/:id", (req, res)=>{
    let {id} = req.params
    let index = users.findIndex(obj=> obj.id === id)
    users.splice(index, 1, {...req.body, id})
    res.send({message: "user updated"})
})

app.get('/', (req, res)=>{
res.send(new Date().toString())})

app.post("/user", (req,res)=>{
    console.log("req", req.body)
    users.push({...req.body, id: Date.now().toString(36)})
    console.log(users)
// users = {...users, ...req.body}
    res.send({user: req.body ,message: "request posted"})
})

app.get('/user', (req, res)=>{
    res.send(users)
})