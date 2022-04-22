const express=require('express');
const app=express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(expressLayouts);
app.set("layout extractScripts", true);
app.set("layout extractStyles", true)

app.get('/',(req,res)=>{
    res.render('index.ejs');
})

app.listen(process.env.PORT);
//process.env.PORT