const express = require("express");
const admincontrol = require("../controllers/admincontrol");
const router =  express.Router()

router.route("/").get(admincontrol.login)
router.route("/home").get(admincontrol.homeadmin)


module.exports = router;