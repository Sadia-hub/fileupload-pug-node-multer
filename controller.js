const imageModel= require("./models")

const imagePage = async (req, res) =>{

    try{
        const users = await imageModel.find({})

        res.render("image",{users})
    }
    catch(error){
        console.log(error)
    }
    
}

const imageUpload = async (req, res) =>{
    try{
        const filename = req.file.filename
        const user = await imageModel.create({...req.body, image:filename})
        console.log(user)
        
        res.redirect("/")
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    imagePage,
    imageUpload
}