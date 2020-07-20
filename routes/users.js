const express=require('express');
const router=express.Router();
//const homecontroller=require('../controllers/home_controller');
const userscontroller=require('../controllers/users_controller');
//router.get('/profile',userscontroller.func2 );


router.get('/profile',userscontroller.func2);
//router.get('/add',userscontroller.func3);






console.log("loaded");

//router.get('/home',homecontroller.home);
module.exports.rot2=router;