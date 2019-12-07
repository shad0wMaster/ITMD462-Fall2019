var express=require('express');
var router=express.Router();
var student=require("../controllers/StudentController.js");
router.get('/',function(req,res){
  student.list(req,res);
});
router.get('/show/:id',function(req,res){
  student.show(req,res);
});
router.get('/create',function(req,res){
  student.create(req,res);
});
router.post('/save',student.save);
router.post('/edit/:id',student.edit_student);
router.post('/update/:id',student.update_student);
router.post('/delete/:id',student.delete_student);
module.exports=router;
