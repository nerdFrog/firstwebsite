let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
let mountains7 = document.getElementById("mountains7");
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.Top = value  + 'px';
    mountains3.style.left = value  + 'px';
    mountains4.style.left = value  + 'px';
    river5.style.left = value + 'px';
    boat6.style.left = value + 'px';
     boat6.style.left = value + 'px';
   
   
}