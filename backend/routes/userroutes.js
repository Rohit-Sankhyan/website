const express = require("express")
const app =  express.Router()
app.get("/", (req, res) => {
    res.render("index")
});
app.get("/about", (req, res) => {
    res.render("about")
});
app.get("/contact", (req, res) => {
    res.render("contact")
});
app.get("/service", (req, res) => {
    res.render("service")
});
app.get("/hire", (req, res) => {
    res.render("hire")
})
app.get("*", (req, res) => {
    res.render("404")
})

module.exports = app;