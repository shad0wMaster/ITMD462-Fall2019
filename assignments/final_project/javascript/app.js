/*
 *Andy Kukuc
 *Professor Charles Beck
 *ITMD-462-01
 *14th Nov. 2019
 */
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
let port=3000;
app.listen(port,()=>{
  console.log('Server Running And Listening On Port '+port);
});

