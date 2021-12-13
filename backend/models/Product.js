const mongoose=require("mongoose");


const productSchema=mongoose.Schema({
productName:{
    type:String
},
image:{
    type:String
}



})

const product=mongoose.model("product",productSchema);
module.exports=product