const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended:true}))

router.use('/add-product',(req,res,next)=>{
    console.log('In another middleware');
    res.send('<form action="/admin/product" method="POST"><label for="title">Add Product - </label><input type="text" name="title"><br><label for="quantity">Quantity -  </label><input type="text" name="quantity"><br><button type="sbumit">Submit</button></form>');
});

router.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
module.exports= router;