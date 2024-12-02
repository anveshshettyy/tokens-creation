const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.use(cookieParser());

app.get('/' , function(req , res){
    let token = jwt.sign({email : "anv@gmail.com"} , "secret");
    res.cookie("token" , token);
    res.send("donee")
});

app.get('/read' , function(req,res){
    let data = jwt.verify(req.cookies.token , "secret");
    console.log(data);
    
})

app.listen(3000)