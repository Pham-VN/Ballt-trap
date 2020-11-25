var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

function carre(x,y,w,h) {
    context.fillStyle = "red";
    context.fillRect(x,y,w,h);
}
function cible(x,y,r,st) {
    context.beginPath();
    context.arc(x,y,r,st,2*Math.PI);
    context.stroke();
}
function loadAndFrawImage(url, x, y) {
    var image = new Image();
    image.onload = function () {
        context.drawImage(image,x,y, 50,50)
    }
    image.src = url;
}

function initial() {
    var x = Math.floor(Math.random()*750);
    var y = Math.floor(Math.random()*350);
    //carre(x,y,50,50);
    loadAndFrawImage("https://i.imgur.com/O2xm8WM.jpg", x, y);
    tab.push([x, y, 50, 50]);
    //cible(x,y,10,0)
}
// initial();

function update() {
    context.clearRect(0,0,800,400);
    initial();
}
var s=(setInterval(update,800));
function myStop() {
    clearInterval(s);
}
var tab = [];
var score = 0;
function coordonne(e){
    var x = e.offsetX;
    var y = e.offsetY;
    for (var i = 0; i <tab.length; i++) {
        if ( x >= tab[i][0] && x <= tab[i][0] + tab[i][2] && y >= tab[i][1] && y <= tab[i][1] + tab[i][2]) {
            context.clearRect(tab[i][0],tab[i][1],tab[i][2],tab[i][3]);
            tab.splice(i, 1);
            score += 1;
            document.getElementById("score").innerHTML = score;
        }
    }
}
function myNouvell(){
    context.clearRect(0,0,800,400);
    score = 0;
    document.getElementById('score').innerHTML = score;
    s;  
}
canvas.addEventListener("click", coordonne);


