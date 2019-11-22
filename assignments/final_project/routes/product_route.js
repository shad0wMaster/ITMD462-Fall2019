/*
 *Andy Kukuc
 *Professor Charles Beck
 *ITMD-462-01
 *20th Nov. 2019
 */
const express=require('express');
const router=express.Router();
const product_handler=require('../handlers/product_handler');
router.get('/test',product_handler.test);
module.exports=router;
