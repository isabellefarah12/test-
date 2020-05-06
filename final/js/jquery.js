$(document).ready(function(){

$("#top").mouseover(function(){
$("#top").attr('src', 'files/8.png').fadeTo("slow", 0.7);
});

$("#top").mouseleave(function(){
$("#top").attr('src', 'files/1.png').fadeTo("slow", 1.0);
});

$("#inter").mouseover(function(){
$("#inter").attr('src', 'files/6.png').fadeTo("slow", 0.7);
});

$("#inter").mouseleave(function(){
$("#inter").attr('src', 'files/2.png').fadeTo("slow", 1.0);
});

$("#non").mouseover(function(){
$("#non").attr('src', 'files/7.png').fadeTo("slow", 0.7);
});

$("#non").mouseleave(function(){
$("#non").attr('src', 'files/3.png').fadeTo("slow", 1.0);
});

$("#maga").mouseover(function(){
$("#maga").attr('src', 'files/5.png').fadeTo("slow", 0.7);
});

$("#maga").mouseleave(function(){
$("#maga").attr('src', 'files/4.png').fadeTo("slow", 1.0);
});






});
