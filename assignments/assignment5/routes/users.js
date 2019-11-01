/*Andy Kukuc
 * Professor Charles Beck
 * ITMD-462-01
 * 10-31-2019
 */
//users.js file here we go
const express=require('express');
const router=express.Router();
//here we are using get with users separate everything to not get confused.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//users id is set here here its all written for the get request
router.get('/:usersID',(req,res,next)=>{
  const id=req.params.usersID;
  if(id==='andy'){
    res.status(200).json({
      message:'You discovered userID Andy using Get!',id:id
    });
  }else{
    res.status(200).json({
      message:'Normal ID Has Been Passed Using Get!',id:id
    });
  };
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//users id here is set and here ware using the post request
router.post('/:usersID',(req,res,next)=>{
  const id=req.params.usersID;
  if(id==='chuck'){
    res.status(200).json({
      message:'Specific usersID passed using POST!',id:id
    });
  }else{
    res.status(202).json({
      message:'Normal usersID passed using POST!',id:id
    });
  };
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*usersID set to patch*/
router.patch('/:usersID',(req,res,next)=>{
  const id=req.params.usersID;
  if(id==='patch'){
    res.status(200).json({
      message:'Specific usersID passed using PATCH!',id:id
    });
  }else{
    res.status(203).json({
      message:'Normal usersID passed using PATCH!',id:id
    });
  };
});
module.exports=router;
