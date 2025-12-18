
import Joi from "joi";


let userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

export {
    userSchema
}