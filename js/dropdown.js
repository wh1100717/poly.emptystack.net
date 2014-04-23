$(document).ready(function(){
  $(".container-navs").click(function(){
    $(".container-navs").animate({right:'13%' },1000);
    $(".main").animate({right:'20%' },1000);
    setTimeout(function(){
      $(".container-navs .dropdown").css("opacity","1");
    },1000);
  });
  $("body").click(function(e){
    if(e.target.id.indexOf("kk")==-1 && e.target.id.indexOf("jj")==-1){
      $(".container-navs .dropdown").css("opacity","0");
        setTimeout(function(){
          $(".container-navs").animate({right:'-130px' },1000);
          $(".main").animate({right:'0px' },1000);
        },1000);
    }
  });
});