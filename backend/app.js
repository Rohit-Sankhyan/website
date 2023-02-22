require('dotenv').config()
const express = require("express")
const path = require("path")
const app = express()
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const nodemailer = require("nodemailer")
const port = process.env.PORT || 8000
const hbs = require("hbs")
require("./database/db")
const contactData = require("./models/contact")
const hireData = require("./models/hire")
// //adding database


//built Midlleware
const static_Path = path.join(__dirname, "../public/")
const template_Path = path.join(__dirname, "../public/templates/views")
const partial_Path = path.join(__dirname, "../public/templates/partials")
// console.log(static_Path)

//to set views engine
const userRoutes = require("./routes/userroutes")
const adminRoutes = require("./routes/adimroute")
app.set("view engine", "hbs")
app.set("views", template_Path)
hbs.registerPartials(partial_Path)
app.use(express.static(static_Path));
app.use(userRoutes)
app.use("/",adminRoutes)
// template engine route






// Post method of form contact
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(bodyparser.urlencoded({ extended: true }))

app.post("/contact", async (req, res) => {
    try {
        const cmessage = req.body.message
        const cname = req.body.name
        const cnumber = req.body.number
        const cemail = req.body.email
        console.log(cname)
        console.log(cnumber)
        console.log(cmessage)

        const contactdb = new contactData({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.number,
            message: req.body.message
        });
        const contactpageData = await contactdb.save();
        console.log("data sent to database")
        res.render("submit")
    } catch (error) {
        res.status(400).send(error)
    }

    var email = req.body.email;
    console.log(email)
    var transporter = nodemailer.createTransport({
    //    host:'smtp.gmail.com',
        service: 'gmail',
        auth: {
            user: 'webscapepvt@gmail.com',
            pass: 'aznzklpzwqdllptw'
        }
    });

    var mailOptions = {
        from: 'webscapepvt@gmail.com',
        to: `${req.body.email}`,
        subject: 'Thanks For Feedback',
        text: `Hello, ${req.body.name}`,
        html : '<h1 style="color:green">Thanks For submiting</h1>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log(`email send to ${req.body.email}`)
            console.log('Email sent: ' + info.response);
        }
    })

});
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.post("/hire", async (req, res) => {
    let data = req.body
    console.log(data)
    let hireDatabase = new hireData({
        name: req.body.username,
        email: req.body.useremail,
        phone: req.body.usernumber,
        project: req.body.projectname,
        projectTech: req.body.projecttech,
        projectDisc: req.body.dic
    });
    let hirepageData = await hireDatabase.save();

    let rendered = res.render("thanks")

});


// listening to port

app.listen(port, (err) => {
    if (err) {
        console.log(`Enable to Start Server ${err}`);
    } else {
        console.log(`->Listening to the port ${port}`)
    }
})