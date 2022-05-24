const express = require("express")
const {imagePage, imageUpload} = require("./controller")

const router = express.Router()

router.route("/").get(imagePage).post(imageUpload)

module.exports = router