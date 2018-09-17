var button1 = document.querySelector('#button1');
var background = document.querySelector('.container');
var button2 = document.querySelector('#button2');
var navColor = document.querySelector('#navbar');

button1.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 background.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};

button2.onclick = function () {
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
   
    navColor.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
   };
