const {readdirSync}=require("fs");
const path=require("path");
const express=require("express");
const app=express();
const cors=require("cors");
const helmet=require("helmet")
const mongoose=require("mongoose")
const morgan=require("morgan")
require("dotenv").config();

//middlewares implement
app.use(cors());
app.use(helmet());
app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}));
app.use(express.static('client/build'));

//routes implement
readdirSync("./routes").map(r=>app.use("/api/v1",require(`./routes/${r}`)));
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

//server connection
const port=process.env.PORT || 8000;

//database connection
mongoose.connect(process.env.DATABASE)
        .then(()=>{
            app.listen(port,()=>{
                console.log(`Server is running on port ${port}`);
            });
        })
        .catch((error)=> console.log(error));

