let userPost = (req, res)=>{
    console.log("req", req.body)
    res.send({message: "req posted"})
}
export default userPost