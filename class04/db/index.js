import mongoose from "mongoose";
import 'dotenv/config'
let url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@minahilcluster.fllh4ha.mongodb.net/${process.env.DB_NAME}?appName=minahilCluster`
// let url = 'mongodb+srv://duashaikh:duashaikh@minahilcluster.fllh4ha.mongodb.net/?appName=minahilCluster'

mongoose.connect(url)

export default mongoose