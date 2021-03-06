const express=require('express');
const app=express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');

app.use(express.static('Public'));
app.use(expressLayouts);
app.set("layout extractScripts", true);
app.set("layout extractStyles", true)

app.get('/',(req,res)=>{
    res.render('index.ejs');
})

app.get('/contact',(req,res)=>{
    res.render('contact.ejs');
})

app.get('/products',function(req,res){
    res.render('products.ejs',{ layout: false })
})

app.get('*',function(req,res){
    res.status(404).render('404.ejs',{ layout: false })
})

app.listen(process.env.PORT);
//process.env.PORT

