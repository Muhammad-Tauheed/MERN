const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    email:{
        type:String,
        default:""
    }
},
{timestamp:true}
)


module.exports=mongoose.model("User",userSchema)