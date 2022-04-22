const express=require('express');
const app=express();
var path = require('path');
var expressLayouts = require('express-ejs-layouts');

app.set('view engine','ejs');
app.use(expressLayouts);
app.set("layout extractScripts", true);
app.set("layout extractStyles", true)
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index.ejs');
})

app.listen(3000);
//process.env.PORT