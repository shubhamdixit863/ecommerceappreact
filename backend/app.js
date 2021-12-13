const express=require("express");
const cors=require("cors");
const app=express();
const productRoutes=require("./routes/productroutes");
const mongoose=require("mongoose");
const port=process.env.PORT || 8081
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}))




app.use("/api/user",productRoutes)

mongoose.connect("mongodb+srv://logan:8fvRmtCQCEHaUnyF@cluster0.b5bwf.mongodb.net/ecomm1").then(data=>{
    console.log("Db connected");
    app.listen(port ,()=>{
        console.log(`Server Running at port ${port}`);
    })
}).catch(err=>{
    console.log(err);
})

