const User=require("../model/user.model")


exports.store=async(req,res)=>{
    try{
        const user =await User.create(req.body)
        res.json({message:"User Created Successfully",status:201,success:true,user})
    }
    catch(err){
        console.log(err);
    }
}

exports.index=async(req,res)=>{
    try{
        const user =await User.find()
        res.json({message:"User Fetched Successfully",status:200,success:true,user})
    }
    catch(err){
        console.log(err);
    }
}

exports.get=async(req,res)=>{
    try{
        const user =await User.findOne({_id:req.params.id})
        if(!user){
        res.json({message:"User not Found",status:404,success:false})
    }
    res.json({message:"User Fetched Successfuly",status:200,success:true,user})
    }
    catch(err){
        console.log(err);
    }
}

exports.destroy=async(req,res)=>{
    try{
        const user =await User.findOneAndDelete({_id:req.params.id})
        if(!user){
        res.json({message:"User not Found",status:404,success:false})
    }
    res.json({message:"User Fetched Successfuly",status:200,success:true})
    }
    catch(err){
        console.log(err);
    }
}

exports.update=async(req,res)=>{
    try{
        const user =await User.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        if(!user){
        res.json({message:"User not Found",status:404,success:false})
    }
    res.json({message:"User Fetched Successfuly",status:200,success:true,user})
    }
    catch(err){
        console.log(err);
    }
}