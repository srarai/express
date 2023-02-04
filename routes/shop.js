const express =require('express');
const router = express.Router();
router.use('/',(req,res,next)=>{
    next();
});



router.get('/',(req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>Hello from Express </h1>');
});

module.exports= router;
