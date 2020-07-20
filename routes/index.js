const express=require('express');
const router=express.Router();
const homecontroller=require('../controllers/home_controller');
const route2=require('./users');
console.log("loaded");

router.get('/',homecontroller.home);

router.use('/users',route2.rot2);


//to add more routes 
//router.use(')



module.exports.rot1=router;