const Product=require("../models/ProductsModel");

// C=Create
exports.CreateProduct=async (req,res)=>{
    let reqBody= req.body;
     Product.create(reqBody)
     .then((data) => {
        res.status(200).json({ status: "success", data: data });
      })
      .catch((error) => {
        // console.log(error)
        res.status(200).json({ status: "fail", data: error });
      });
 }
//read products

 exports.ReadProduct=(req,res)=>{
    Product.find({})
    .then((data) => {
        res.status(200).json({ status: "success", data: data });
      })
      .catch((error) => {
        // console.log(error)
        res.status(200).json({ status: "fail", data: error });
      });
}

// R=Read By ID
exports.ReadProductByID=(req,res)=>{
    let id= req.params._id;
    let data=Product.find(id)
    .then((data) => {
        res.status(200).json({ status: "success", data: data });
      })
      .catch((error) => {
        // console.log(error)
        res.status(200).json({ status: "fail", data: error });
      });
}

// U=Update

exports.UpdateProduct=(req,res)=>{
   let id= req.params._id;
   let reqBody=req.body;
   Product.updateOne(id,reqBody)
   .then((data) => {
    res.status(200).json({ status: "success", data: data });
  })
  .catch((error) => {
    // console.log(error)
    res.status(200).json({ status: "fail", data: error });
  });
}


// D=Delete
exports.DeleteProduct=(req,res)=>{
    let id = req.params.id;
    let data = Product.deleteOne({ _id: id })
    .then((data) => {
        res.status(200).json({ status: "success", data: data });
      })
      .catch((error) => {
        // console.log(error)
        res.status(200).json({ status: "fail", data: error });
      });
}
