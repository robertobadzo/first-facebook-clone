import mongoose from "mongoose"
const schema = mongoose.Schema;
 const registerSchema = new schema ({
 name: String, 
 surname: String,
 email: String,
 password: String
})
const registerModel = mongoose.model("user-accounts", registerSchema)

export default registerModel;