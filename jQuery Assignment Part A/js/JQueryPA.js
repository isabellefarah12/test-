// This is how you start your js file

$(document).ready(function(){  //Beginning of your document

  // This will hide your html elements when your page loads



///           MENU          ////
$("aside ul li:first-child").click(function(){
  $("main .a").show();
  $("main .b").hide();
  $("main .c").hide();
  $("main .d").hide();
  $("main .e").hide();
});

$("aside ul li:nth-child(2)").click(function(){
  $("main .a").hide();
  $("main .b").show();
  $("main .c").hide();
  $("main .d").hide();
  $("main .e").hide();
});

$("aside ul li:nth-child(3)").click(function(){
  $("main .a").hide();
  $("main .b").hide();
  $("main .c").show();
  $("main .d").hide();
  $("main .e").hide();
});
$("aside ul li:nth-child(4)").click(function(){
  $("main .a").hide();
  $("main .b").hide();
  $("main .c").hide();
  $("main .d").show();
  $("main .e").hide();
});
$("aside ul li:nth-child(5)").click(function(){
  $("main .a").hide();
  $("main .b").hide();
  $("main .c").hide();
  $("main .d").hide();
  $("main .e").show();
});


$("footer").mouseover(function(){
    $("footer h3").html("Conact me!");
});
$("footer").mouseleave(function() {
  $("footer h3").html("Need help?");
});

$("#_css").click(function(){
  $(".cell").css("background-color", "black");
});


});
