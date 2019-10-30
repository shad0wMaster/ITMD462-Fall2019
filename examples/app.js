//making an online app and making it work
//put this on the php server
const express=require('express');
const app=express();
app.use((req,res,next)=>{
  res.status(200).json({
    message: 'It Works!'
  });
});
module.exports=app;
