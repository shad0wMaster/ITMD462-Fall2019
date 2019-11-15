/*Andy Kukuc
 * Professor Charles Beck
 * ITMD-462-01
 * 10-31-2019
 */
//users.js file here we go
const express=require('express');
const router=express.Router();
const array1=['andy','iit','dog','chuck'];
//here we are using get with users separate everything to not get confused.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/',(req,res,next)=>{
  res.status(200).json({
    message:'Handling GET requests to /users!'
  });
});
router.post('/',(req,res,next)=>{
  res.status(201).json({
    message:'Handling POST requests to /users!'
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//users id is set here here its all written for the get request
router.get('/:usersID',(req,res,next)=>{
  const id=req.params.usersID;
  while(array1.indexOf(id)>-1){
    res.status(200).json({message:'You discovered a secret userID using Get!',id:id});
  }
  res.status(201).json({message:'Normal ID Has Been Passed Using Get!',id:id});
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//users id here is set and here ware using the post request
router.post('/:usersID',(req,res,next)=>{
  const id=req.params.usersID;
  while(array1.indexOf(id)>-1){
    res.status(200).json({message:'Specific usersID passed using POST!',id:id});
  }
    res.status(202).json({message:'Normal usersID passed using POST!',id:id});
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*usersID set to patch*/
router.patch('/:usersID',(req,res,next)=>{
  const id=req.params.usersID;
  while(array1.indexOf(id)>-1){
    res.status(200).json({message:'Specific usersID passed using PATCH!',id:id});
  }
    res.status(203).json({message:'Normal usersID passed using PATCH!',id:id});
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*usersID set to delete*/
router.delete('/:usersID',(req,res,next)=>{
  const id=req.params.usersID;
  while(array1.indexOf(id)>-1){
    res.status(200).json({message:'Specific usersID passed using DELETE!',id:id});
  }
  res.status(203).json({
    message:'Normal usersID passed using DELETE!',id:id});
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports=router;
