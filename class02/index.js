import chalk from 'chalk'
import express, { json } from 'express'
import Joi from 'joi'
import { userSchema } from './schema/index.js'

let app = express()
let users = []
app.use(express.json())

app.listen(4000, ()=>{
    console.log("server is running on port")
})

app.use('/', (req, res, next)=>{
    console.log(chalk.blue("hello world"))
    next()
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

app.post("/user", async (req,res)=>{
  try{ await userSchema.validateAsync(req.body)
    console.log("req", req.body)
    users.push({...req.body, id: Date.now().toString(36)})
    console.log(users)
    res.status(201).send({status: 201 ,user: req.body ,message: "request posted"})
}
// users = {...users, ...req.body}
    catch(err){
        res.status(404).send({error: err.details || "something went wrong",status: 404  ,user: req.body })
    }
})

app.get('/user', (req, res)=>{
    res.send(users)
})