const Product=require("../model/product.model")


exports.store=async(req,res)=>{
    try{
       
        const product =await Product.create(req.body)
        res.json({message:"product Created Successfully",status:201,success:true,product})
    }
    catch(err){
        console.log(err);
    }
}

exports.index=async(req,res)=>{
    try{
        const product =await Product.find()
        res.json({message:"product Fetched Successfully",status:200,success:true,product})
    }
    catch(err){
        console.log(err);
    }
}

exports.get=async(req,res)=>{
    try{
        const product =await Product.findOne({_id:req.params.id})
        if(!product){
        res.json({message:"product not Found",status:404,success:false})
    }
    res.json({message:"product Fetched Successfuly",status:200,success:true,product})
    }
    catch(err){
        console.log(err);
    }
}

exports.destroy=async(req,res)=>{
    try{
        const product =await Product.findOneAndDelete({_id:req.params.id})
        if(!product){
        res.json({message:"product not Found",status:404,success:false})
    }
    res.json({message:"product Fetched Successfuly",status:200,success:true})
    }
    catch(err){
        console.log(err);
    }
}

exports.update=async(req,res)=>{
    try{
        const product =await Product.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        if(!product){
        res.json({message:"product not Found",status:404,success:false})
    }
    res.json({message:"product Fetched Successfuly",status:200,success:true,product})
    }
    catch(err){
        console.log(err);
    }
}