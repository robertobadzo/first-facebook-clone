import mongoose from "mongoose"
const schema = mongoose.Schema;
 const registerSchema = new schema ({
 username: String, 
 password: String
})
const registerModel = mongoose.model("user-accounts", registerSchema)

export default registerModel;