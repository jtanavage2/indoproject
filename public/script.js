/* Project:  Hands-On Project 2-2 
      Author: Joshua Tanavage
      Date: 09/13/2017
      Purpose:
*/ 
document.getElementById("submit").addEventListener("click", submitInfo, false);
function submitInfo(){
  var name = document.getElementById("nameinput");
  var email = document.getElementById("emailinput");
  var phone = document.getElementById("phoneinput");
  (name.value && email.value && phone.value) ? alert ("Thank You!") : alert ("Please fill in all fields.");
}