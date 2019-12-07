var mongoose=require('mongoose');
var Student=require('../models/Student');
//var Student=mongoose.model("Student");

var studentController={};
studentController.list=function(req,res){
  Student.find({}).exec(function(err,students){
    if(err){
      console.log("Error:",err);
    }else{
      res.render("../views/student/index",{students:students});
    }
  });
}
studentController.show=function(req,res){
  Student.locate_single({_id:req.params.id}).exec(function(err,student){
    if(err){
      console.log("Error:",err);
    }else{
      res.render("../views/student/show",{students:students});
    }
  });
};
studentController.create=function(req,res){
  res.render("../views/student/create");
}
studentController.save=function(req,res){
  var student=new Student(req.body);
  student.save(function(err){
    if(err){
      console.log(err);
      res.render("../views/student/create");
    }else{
      console.log("New Student Succesfully Added!");
      res.redirect("../views/student/show/"+student._id);
    }
  });
};
studentController.edit_student=function(req,res){
  Student.locate_single({_id:req.params.id}).exec(function(err,student){
    if(err){
      console.log("Error:",err);
    }else{
      res.render("../views/student/edit",{student:student});
    }
  });
}
studentController.update_student=function(req,res){
  Student.locate_update=(req.params.id,{$set:{name:req.body.name,ID_Number:req.body.ID_Number,Current_Year_In_School:req.body.Current_Year_In_School}},
  {new:true},
  function(err,student){
    if(err){
      console.log(err);
      res.render("../views/student/edit",{student:req.body});
    }
    res.redirect("/student/show/"+student_id);
  });
};
studentController.delete_student=function(req,res){
  Student.remove({_id:req.params.id},function(err){
    if(err){
      console.log(err);
    }else{
      console.log("Student Record Removed!");
      res.redirect("/student");
    }
  });
};
module.exports=studentController;
