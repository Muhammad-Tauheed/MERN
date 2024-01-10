const express=require("express")
const app=express();
const PORT=8000
const connectDB=require("./config/connectDB")
const userRoute=require("./routes/index")
var bodyParser = require('body-parser')



connectDB();




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use("/api",userRoute);
app.use("/home",(req,res)=>{
    res.json ({message:"Hellow from Home"})
})


app.listen(PORT,()=>{
     console.log(`Server is running on port ${PORT}`)
})