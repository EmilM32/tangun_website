$(document).ready(function(){

  $("#card4").load("text/slownik.html");
  $("#card5").load("text/mitologia.html");
  $("#card7").load("text/oke.html");
  $("#card8").load("text/galeria.html");

  $("#open_menu").click(function(){
    $("#leftMenu").css("width","100%");
  });

  $(".closebtn").click(function(){
    $("#leftMenu").css("width","0");
  });

   $(".jumbotron").mouseenter(function(){
     $("#img_text").show();
     $("#top_img").css({opacity:0.5});
   });
   $(".jumbotron").mouseleave(function(){
     $("#img_text").hide();
     $("#top_img").css({opacity:1});
   });

   $("#img_text").click(function(){
     $("#card1").hide();
     $("#card2").show();
   });

   $("#card2 small").click(function(){
     $("#card1").show();
     $("#card2").hide();
   });

   $(".tkd_links").hide();

   $(".tkd_menu").click(function(){
     $(".tkd_links").toggle();
     var menu_visible = $(".tkd_links").is(":visible");
     if (menu_visible == true) {
       $(".tkd_menu span").removeClass().addClass("glyphicon glyphicon-chevron-up");
     } else {
       $(".tkd_menu span").removeClass().addClass("glyphicon glyphicon-chevron-down");
     }
   });

   $("#homePage").click(function(){
     $("#leftMenu").css("width","0");
     $(".jumbotron").hide();
     $("#card1").show();
   });
   $("#treningi").click(function(){
     $("#leftMenu").css("width","0");
     $(".jumbotron").hide();
     $("#card2").show();
   });
   $("#contact").click(function(){
     $("#leftMenu").css("width","0");
     $(".jumbotron").hide();
     $("#card3").show();
   });
   $("#slownik").click(function(){
     $("#leftMenu").css("width","0");
     $(".jumbotron").hide();
     $("#card4").show();
   });
   $("#mitologia").click(function(){
     $("#leftMenu").css("width","0");
     $(".jumbotron").hide();
     $("#card5").show();
   });
   $("#pasy").click(function(){
     $("#leftMenu").css("width","0");
     $(".jumbotron").hide();
     $("#card6").show();
   });
   $("#oke").click(function(){
     $("#leftMenu").css("width","0");
     $(".jumbotron").hide();
     $("#card7").show();
   });
   $("#galeria").click(function(){
     $("#leftMenu").css("width","0");
     $(".jumbotron").hide();
     $("#card8").show();
   });

   $("#logo").click(function(){
     $(".jumbotron").hide();
     $("#card1").show();
   });

});
