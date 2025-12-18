const express = require("express")
const app = express()

app.use(function(req,res,next){
    next();
});

app.get('/' , function(req , res){
    res.send("Hello World")
})

app.get('/profile' , function(req , res){
    res.send("Hello WOW profile")
})

app.get('/profile:username' , function(req , res){
    res.send(`Hello i am speaking ${req.params.username}`);
})


app.listen(3000, function(){
    console.log("Server is running on port 3000")
});
