const express=require("express")
const app=express();
const PORT=8000
const connectDB=require("./config/connectDB")
const userRoute=require("./routes/user.routes")


connectDB();





app.use("/api",userRoute);
app.use("/home",(req,res)=>{
    res.json ({message:"Hellow from Home"})
})


app.listen(PORT,()=>{
     console.log(`Server is running on port ${PORT}`)
})