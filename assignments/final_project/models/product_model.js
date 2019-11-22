/*
 *Andy Kukuc
 *Professor Charles Beck
 *ITMD-462-01
 *15th Nov. 2019
 */
const mongoose=require('mongoose');
const schema_database=mongoose.schema_database;
let Product_Database=new schema_database({
  name:{type:String,required:true,max:256},
  price:{type:Number,required:true},
})
module.exports=mongoose.model('Product',Product_Database);
