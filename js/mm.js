$(document).ready(function(){

setInterval(function(){


$("#head").css("-webkit-transform","rotate(-10deg)");
$("#head").css("-o-transform","rotate(-10deg)");
$("#head").css("-moz-transform","rotate(-10deg)");
setTimeout(function(){


$("#head").css("-webkit-transform","rotate(10deg)");
$("#head").css("-o-transform","rotate(10deg)");
$("#head").css("-moz-transform","rotate(10deg)");

},1000);

},2000);






});
