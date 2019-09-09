/*Andy Kukuc
 * Professor Charles Beck
 * ITMD-462-01
 * 6th Sept. 2019*/
var i=0;
course_cat=["ITMS","ITMS","IPRO","ITMD","PSYC","ITMD"];
course_number=["478","428","497","411","380","462"];
course_desc=["Cyber Securtiy Managment","Database Security","Principles of Entrepreneurship","Intermediate Software Development","Human Sexuality","Web Site App Development"];
function display_course(){
  while(course_cat[i]){
    document.write("<strong>"+course_cat[i]+"-"+course_number[i]+"</strong>"+"-"+course_desc[i]+"<br/>");
    i++;
  }
}
