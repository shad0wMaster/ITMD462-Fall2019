var mongoose=require('mongoose');
var StudentSchema=new mongoose.Schema({
  name:String,
  ID_Number:Number,
  Current_Year_In_School:Number,
  updated_at:{type:Date,default:Date.now},
});
module.exports=mongoose.model('Student',StudentSchema);
