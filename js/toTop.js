$(document).ready(
  		function(){
  			$(window).scroll(function(){
          var vtop=$(document).scrollTop();
          if(vtop>50){
            $(".gotop").css({"opacity":"1","pointer-events":"auto"});
          }
          else{
          	$(".gotop").css({"opacity":"0","pointer-events":"none"});
          }
  			});
  		}
);