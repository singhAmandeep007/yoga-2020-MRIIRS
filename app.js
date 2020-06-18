var express=require('express');
var app=express();

const yoga = require('./yoga.json')

app.use(express.static(__dirname+'/public'));

app.locals.yoga=yoga;


//home page 
app.get("/",function(req,res){
    //rendering home ejs file 
    res.render("home.ejs");
})
//asanas page 
app.get('/home',(req,res)=>{
    res.render('landing.ejs')
})
app.get("/contact",(req,res)=>{
    res.render('contact.ejs')
})
app.get("/",(req,res)=>{
    res.redirect('/home')
})
app.listen(process.env.PORT|| 3000,function(){
    console.log("server is up")
});
