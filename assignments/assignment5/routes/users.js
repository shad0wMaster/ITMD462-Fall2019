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
router.get('/:usersID',(req,res,next)=>{
  const id=req.params.usersID;
  if(id==='andy'){
    res.status(200).json({
      message:'You discovered userID Andy using Get!',id:id
    });
  }else{
    res.status(200).json{
      message:'Normal ID Has Been Passed Using Get!',id:id
    });
  };
});
module.exports=router;
