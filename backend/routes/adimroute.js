const express = require("express")
const app =  express.Router()
app.get("/admin", (req, res) => {
    // res.render("admin-login")
    res.send("hello admin")
});
app.get("*", (req, res) => {
    res.render("404")
})

module.exports = app;