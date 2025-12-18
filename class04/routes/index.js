import express from 'express'
import userRouter from './user/index.js';
//controller
let router = express.Router();

router.use('/user', userRouter)

export default router;