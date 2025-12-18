import express, { urlencoded } from 'express';
const app=express()
app.use(express.urlencoded({extended:false}))

let users=[]
app.get("/",(req,res)=>{
    res.send(users)
})

app.post("/user",(req,res)=>{
    res.send({message:"connected"})
    console.log(req.body)
    users.push({...req.body ,id:Date.now().toString(36)})
})
app.delete("/user/:id",(req,res)=>{
  let {id}=req.params
  let index=users.findIndex(user => user.id == id)
  users.splice(index,1)
})
app.put("/user/:id",(req,res)=>{
     let {id}=req.params
     let index=users.findIndex(user => user.id == id)
     users.splice(index,1,{...req.body,id})
     res.send({message:"updated"})
})
app.listen(5000,()=>{
    console.log("successfully connected to server ")
})