const express=require('express');
const app=express();
const port =7000;
const expressLayouts=require('express-ejs-layouts');
const route=require('./routes/index');



app.use(express.static('./assets'));

//use express router
app.use(expressLayouts);

app.use('/',route.rot1);


app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err)
{
if(err)
{
    console.log("error",err);
//console.log(`error${err}`);
}

console.log(`server is running ${port}`);
})