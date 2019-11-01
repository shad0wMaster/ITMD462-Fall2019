/*Andy Kukuc
 * Professor Charles Beck
 * ITMD-411-01
 * 10-31-2019*/
//app.js file to connect everything
const express=require('express');
const app=express();
app.use((req,res,next)=>{
  res.status(200).json({
    message:'It Works!'
  });
});
module.exports=app;
