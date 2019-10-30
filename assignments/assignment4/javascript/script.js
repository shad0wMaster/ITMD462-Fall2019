/*Andy Kukuc
 * Professor Charles Beck
 * ITMD-462-01
 * 23rd Oct. 2019*/
(function(){
  function convert_JSON(form){
    var objects={}; // declare variable objects and object
    //grabs all input elements from the html form and store it in variable elements as a nodelist. Metadata is stored in 3 nodes, one for each input field
    var elements=form.querySelectorAll("input");
    //console.log(elements);
    //a loop will traverse the nodelist in elements, grap the usefull metadata (name and value) to create an object.
    //The 3 nodes will become the field variables for the object, using name as the variable name and value as the data being stored to it.
    for(var i=0;i<elements.length;i++){
      var element=elements[i]; //added an extra step. Stored the json parsed object into a temp variable called element (Can be removed)
      // var name=elements.name=element.name;  //extra work done (can be removed)
      var name = elements[i].name; //store the index.html form id attributes
      var value=elements[i].value; //get the raw data stored in the current index of nodelist and store it
      // if(name){   //Extra step that does nothing. (Debuggin) Checking for input errors and forgot to take out
      objects[name]=value; //add variable named after name to object objects and initialize them using the data in value; appends more variables w/ data to the object through each loop
      // }
    }
    return JSON.stringify(objects); //convert the object into a json object and return it when called
  }

  document.addEventListener("DOMContentLoaded",function(){
    var form=document.getElementById("test");
    var output=document.getElementById("output");
    //add an event listener on the form submit button that when clicked will clear all form fields and display user input at the bottom of index.html
    form.addEventListener("submit",function(e){
      e.preventDefault(); //this will prevent the form from submitting if you press the submitt button (will not clear the form lol)
      var json=convert_JSON(this); //run the function and store the output (json object) into a variable
      output.innerHTML+='<p style="text-align:center;color:#FFFFF0;width:100%;">'+json+'<br>'; //insert html element into the index.html which has json object of the user input
      // This part below clears all input fields in the html form
      document.querySelector('#box1').value='';
      document.querySelector('#box2').value='';
      document.querySelector('#box3').value='';
    },false);  // Boolean value that specifies whether the event should be executed in the capturing or in the bubbling phase. Default is false so this is redundent (not needed)
  });
})();

