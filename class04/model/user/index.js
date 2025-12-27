
import mongoose from 'mongoose';


let userSchema = new mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.String
    },
    email: {
        type: mongoose.Schema.Types.String,
        unique: true
    },
    password: {
        type: mongoose.Schema.Types.String
    }
})

let USER = mongoose.model('user', userSchema)

export default USER