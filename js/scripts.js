$(document).ready(function(){
  const age = parseInt(prompt("Enter your age"));

  if (age >= 18) {
    $('#older').show();
  } 
  else {
    $('#younger').show();
  }
});  