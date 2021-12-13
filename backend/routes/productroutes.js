const express=require("express");
const router=express.Router();
const Product=require("../models/Product");

router.post("/data",async(req,res)=>{
    // page ---0
    const data=await Product.find().skip(parseInt(req.body.page)*parseInt(req.body.limit)).limit(req.body.limit);
    // select * from LIMIT 10 ,10

    // creating product

    res.json({message:"Working",products:data})

})

router.post("/create",async(req,res)=>{
    const data=await Product.create(req.body.data);
    res.json({message:"Success",data:data});

    

    // creating product

})


module.exports=router;