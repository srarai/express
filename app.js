const http= require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended:true}))

app.use('/',(req,res,next)=>{
    next();
});
app.use('/add-product',(req,res,next)=>{
    console.log('In another middleware');
    res.send('<form action="/product" method="POST"><label for="title">Add Product - </label><input type="text" name="title"><br><label for="quantity">Quantity -  </label><input type="text" name="quantity"><br><button type="sbumit">Submit</button></form>');
});

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});


app.use('/',(req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>Hello from Express </h1>');
});
app.listen(3000);