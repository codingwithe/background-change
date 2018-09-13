var button = document.querySelector('.button');
var background = document.querySelector('.container');

button.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 background.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};
