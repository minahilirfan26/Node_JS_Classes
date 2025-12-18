import express from 'express'
import userPost from './post.js';

let userRouter = express.Router();

userRouter.post('/', userPost)


export default userRouter