var button1 = document.querySelector('#button1');
var background = document.querySelector('.container');
var button2 = document.querySelector('#button2');
var navColor = document.querySelector('#navbar');

button1.onclick = function () {
 var shade = Math.floor(Math.random() * 256);
 var red = shade;
 var blue = shade;
 var green = shade;

 background.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};

button2.onclick = function () {
    var shade = Math.floor(Math.random() * 256);
    var red = shade;
    var blue = shade;
    var green = shade;
   
    navColor.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
   };
