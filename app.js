var express=require('express');
var app = require('express')();
var http = require('http').Server(app);
const bodyParser =require('body-parser');
var data;
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/',function(req,res){
    res.render('home');
})
app.get('/result',function(req,res){
    res.render('res',{data:data})
})
app.post('/',function(req,res){
    data=req.body.data;
    res.redirect('/result')
})
http.listen(3000, function() {
    console.log('listening on *:3000');
 });