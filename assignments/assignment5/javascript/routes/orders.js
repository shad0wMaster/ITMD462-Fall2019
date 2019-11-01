/*Andy Kukuc
 * Professor Charles Beck
 * ITMD-462-01
 * 10-31-2019
 */
//orders.js file figuring it out
const express=require('express');
const router=express.Router();
router.get('/',(req,res,next)=>{
  res.status(200).json({
    message: 'Orders were fetched'
  });
});
router.post('/',(req,res,next)=>{
  res.status(200).json({
    message:'Order was created'
  });
});
router.get('/:orderID',(req,res,next)=>{
  res.status(200).json({
    message:'Order Details',orderID:req.params.orderID
  });
});
router.delete('/:orderID',(req,res,next)=>{
  res.status(200).json({
    message:'Order Deleted',orderID:req.params.orderID
  });
});
module.exports=router;
