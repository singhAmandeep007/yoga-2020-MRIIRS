var express=require('express');
var app=express();
//var axios=require('axios');

const yoga = require('./yoga.json')
//request required to get data from api
//var request= require('request');
//console.log(yoga)
//const fs = require('fs');
app.use(express.static(__dirname+'/public'));


// fs.readFile('./yoga.json', 'utf8', (err, jsonString) => {
//     if (err) {
//         console.log("Error reading file from disk:", err)
//         return
//     }
//     try {
//         const data = JSON.parse(jsonString)
//         //console.log("Customer address is:", data) // => "Customer address is: Infinity Loop Drive"
// } catch(err) {
//         console.log('Error parsing JSON string:', err)
//     }
// })

app.locals.yoga=yoga;


//home page to search a movie title in api data
app.get("/",function(req,res){
    //rendering search ejs file 
    res.render("home.ejs");
})
//results page showing the result of searched movie

app.get('/home',(req,res)=>{
    res.render('landing.ejs')
})
app.listen(3000,function(){
    console.log("server started");
});