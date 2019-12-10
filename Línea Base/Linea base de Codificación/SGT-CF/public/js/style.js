var flag = true;
$(document).ready(function () {
 
  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });

  $('.h-hamburguesa').click(function(){
     if(flag){
        $('.menu-izq').addClass('active');
        $('.menu-izq').removeClass('remove');
        flag = false;
     } 
     else{
        $('.menu-izq').addClass('remove');
        $('.menu-izq').removeClass('active');
        flag = true;
     }
  });

});