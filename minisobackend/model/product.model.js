const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    title:{
        type:String,
        default:""
    },

    img:{
        type:String,
        default:""
    },

    price:{
        type:String,
        default:""
    },
    inStock:{
        type:String,
        default:false
    }
    
},
{timestamp:true}
)


module.exports=mongoose.model("Products",productSchema)