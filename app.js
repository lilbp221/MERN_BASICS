// const app=require('express')() alternatively

const express= require('express');
const app= express ();

app.listen(3000,()=>{
      console.log("Hello world")
})

app.get('/', function(req, res){
res.send("Hello world")
})
app.get('/home', function(req, res){
      res.send("Hello home")
      })