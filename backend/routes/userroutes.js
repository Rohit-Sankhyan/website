const express = require("express")
const router =  express.Router()
const usercontroller = require("../controllers/userscontrol")
router.route("/").get(usercontroller.home)
router.route("/about").get(usercontroller.about)
router.route("/contact").get(usercontroller.contact)
router.route("/service").get(usercontroller.service)
router.route("/hire").get(usercontroller.hire)



module.exports = router

