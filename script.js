const express =  require("express");
const app = express();

app.use((req, res, next) => {
    console.log("This is middleware")
    next();
})

app.use(express.static("./public"))

app.set("view engine", "ejs")


app.get("/error", function(req, res, next){
    throw error 
})

app.get("/", function (req, res){
    res.send("Server is Initilallised!");
})

app.get("/profile/:username", (req, res) =>{
    res.send(`Hello From ${req.params.username}`)
})

app.get("/home", function(req, res){
    res.render("index", {Manejando: "Priority"})
})

app.get("/contact", function(req, res){
    res.render("contact")
})

app.use(
    function errorHandler (err, req, res, next) {
        if (res.headersSent) {
          return next(err)
        }
        res.status(500)
        res.render('error', { error: "Found an error" })
      }
)

app.listen(3000);