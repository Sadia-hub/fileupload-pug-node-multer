const multer = require("multer")

const fileStorage = multer.diskStorage({
    destination:(req, file, callback)=>{
        console.log("Hello World")
        callback(null, "./images")
    },
    filename:(req, file, callback)=>{
        callback(null, Date.now()+"_"+file.originalname)
    }
});

module.exports = fileStorage;