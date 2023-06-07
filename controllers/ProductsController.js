const Product=require("../models/ProductsModel");

// C=Create
exports.CreateProduct=(req,res)=>{
    let reqBody= req.body;
     Product.create(reqBody,(err,data)=>{
         if(err){
             res.status(400).json({status:"fail",data:err})
         }
         else{
             res.status(200).json({status:"success",data:data})
         }
     })
 }
//read products

 exports.ReadProduct=(req,res)=>{
    Product.find((err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

// R=Read By ID
exports.ReadProductByID=(req,res)=>{
    let id= req.params._id;
    Product.find(id,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

// U=Update

exports.UpdateProduct=(req,res)=>{
   let id= req.params._id;
   let reqBody=req.body;
   Product.updateOne(id,reqBody,(err,data)=>{
       if(err){
           res.status(400).json({status:"fail",data:err})
       }
       else{
           res.status(200).json({status:"success",data:data})
       }
   })
}


// D=Delete
exports.DeleteProduct=(req,res)=>{
    let id= req.params.id;
    Product.remove(id,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}
