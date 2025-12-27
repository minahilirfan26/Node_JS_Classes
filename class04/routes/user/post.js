import USER from "../../model/user/index.js"

let userPost = (req, res)=>{
 try{
       let user = new USER(req.body)
    user.save()
    console.log("req", req.body)
    res.send({message: "req posted"})
 }
 catch(err){
    res.send(err.details,"error")
 }
}
export default userPost