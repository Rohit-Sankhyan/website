module.exports= {
    login :(req,res)=>{
        res
        .status(200)
        .render("admin-login")
    },
    homeadmin:(req,res)=>{
        res
        .status(200)
        .render("admin-home")
    }
    }