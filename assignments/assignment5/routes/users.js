/*Andy Kukuc
 * Professor Charles Beck
 * ITMD-462-01
 * 10-31-2019
 */
//users.js file here we go
const express=require('express');
const router=express.Router();
router.get('/',(req,res,next)=>{
  res.status(200).json({
    message:'Handling GET requests to /users'
  });
});
router.post('/',(req,res,next)=>{
  res.status(201).json({
    message:'Handling POST REQUESTS to /users'
  });
});
module.exports=router;
