$(document).ready( function(){


$("#_hide").click(function(){
  $(".gridContent div:first-child p").hide();
});

$("#_show").click(function(){
  $(".gridContent div:first-child p").show();
});

$("#_toggle").click( function(){
  $(".gridContent div:nth-child(2) p").toggle();
});

$("#_html").click(function() {
  $(".gridContent div:nth-child(3) p").html("Hello <b>World</b>!");
});

$("#_css").click(function(){
  $(".box").css("background-color", "lightblue");
});


$("footer").mouseover(function(){
    $("footer p").html("Yeah! You're over me");
});

$("footer").mouseleave(function() {
  $("footer p").html("Comeback...=(");
});



// --------------------- Debug #4 ----------------------------

// Here goes your jQuery :

$("#_show").click(function(){
  $(".gridContent div:first-child p").show();
});
$("#_hide").click(function(){
  $(".gridContent div:nth-child(2) p").hide();
});
$("footer").mouseover(function(){
    $("footer p").html("You made it!");
});
$("footer").mouseleave(function() {
  $("footer p").html("Where did you go?=(");
});
$("#_html").click(function() {
  $(".gridContent div:nth-child(3) p").html("Goodbye!");
});

$("#_css").click(function(){
  $(".box").css("background-color", "red");
});



});
