$(document).ready(function(){
   $("li").click(function(){
      // remove classes from all
      $("li").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });

   $("#refresh").click(function(){
      if(_mode===1)
        clearDonut();
      else if(_mode===2)
        clearStackedBar();
      else
        clearBar();
   });
});