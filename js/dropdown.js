$(document).ready(function(){


setInterval(function(){

$(".container-navs .dropdown").css("pointer-events","none");
$(".container-navs .dropdown").css("opacity","0");

$(".container-navs").animate({right:'-80px' },1000);



},20000);



  $(".symbol").click(function(){

$(".container-navs .dropdown").css("pointer-events","none");
$(".container-navs .dropdown").css("opacity","0");

$(".container-navs").animate({right:'-80px' },200);
 var i=$(this).parent();






    i.animate({right:'13%' },500);

   
   
    $(".main").animate({right:'20%' },500);
    setTimeout(function(){
      
      i.find("ul").css("opacity","1");
       i.find(".dropdown").css("pointer-events","auto")
    },500);

  

  });




});
