require("pug")
const mongoose = require("mongoose")
const path = require("path")
const multer = require("multer")
const express = require("express");
const imageRouter = require("./routes")
const fileStorage = require("./middleware");



const port = 27017



const app= express();

app.set("view engine","pug")




app.use("/",express.static(path.resolve("./images")))

app.use(multer({
    storage:fileStorage
}).single("image"))


app.use(express.urlencoded({extended:true}))
app.use(imageRouter)


app.all("*",(req, res)=>{
    res.render("page404",{})
});

const start = async () =>{
try{
    await mongoose.connect("mongodb://127.0.0.1:27017/pug");
    console.log("DB CONNECTED")
    app.listen(port,()=>{
        console.log(`listening to port ${port}`)
    })
}catch(error){

}
}

start()