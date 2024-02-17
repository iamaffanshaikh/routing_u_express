const express =  require("express");
const app = express();

app.use((req, res, next) => {
    console.log("This is middleware")
    next();
})

app.get("/", function (req, res){
    res.send("Server is Initilallised!");
})

app.get("/contact", function(req, res){
    res.send("This is Contact page!");
})

app.get("/profile/:username", (req, res) =>{
    res.send(`Hello From ${req.params.username}`)
})

app.set("view engine", "ejs")

app.get("/home", function(req, res){
    res.render("index", {Manejando: "Priority"})
})

app.listen(3000);