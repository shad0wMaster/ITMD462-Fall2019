/*Andy Kukuc
 * Professor Charles Beck
 * ITMD-462-01
 * 23rd Oct. 2019*/
(function(){
  function convert_JSON(form){
    var objects={};
    var elements=form.querySelectorAll("input","select","textarea");
    for(var i=0;i<elements.length;i++){
      var element=elements[i];
      var name=elements.name=element.name;
      var value=element.value;
      if(name){
        objects[name]=value;
      }
    }
    return JSON.stringify(objects);
  }
  document.addEventListener("DOMContentLoaded",function(){
    var form=document.getElementById("test");
    var output=document.getElementById("output");
    form.addEventListener("submit",function(e){
      e.preventDefault();
      var json=convert_JSON(this);
      output.innerHTML=json;
    },false);
  });
})();
