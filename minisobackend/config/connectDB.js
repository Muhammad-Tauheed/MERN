const mongoose=require("mongoose")

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://Tauheed004:mtd_2004@cluster0.xwblgls.mongodb.net/")
        console.log("DB Connected Successfuly");


    }
    catch(err){
        console.log(err);

    }
}




module.exports=connectDB