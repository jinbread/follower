var elem = document.getElementById('draw');
var two = new Two({ 
    fullscreen: true, 
    autostart: true 
}).appendTo(elem);

var r = 20; // radius
var m = 20; // margin
var a = 0; // angle


var lineArray = [];

for (var i = 0; i < window.innerWidth / (2*r + m); i++) {
    for(var j = 0; j < window.innerHeight / (2*r + m); j++) {
        var line = two.makeLine(r + (2*r+m) * i, (2*r+m) * j, r + (2*r+m) * i, 2 * r + (2*r+m) * j);
        line.linewidth = 2;
        line.stroke = "rgba(253, 193, 94, 1)"
        lineArray.push(line);
    }
};

addEventListener("touchstart", function(event){
    x = event.touches[0].clientX;
    y = event.touches[0].clientY;
    for (var i = 0; i < lineArray.length; i++) {    
        lineArray[i].rotation = Math.atan((x-lineArray[i].translation.x)/(y-lineArray[i].translation.y)) * -1; 
    }
})

addEventListener("touchmove", function(event){
    x = event.touches[0].clientX;
    y = event.touches[0].clientY;
    for (var i = 0; i < lineArray.length; i++) {    
        lineArray[i].rotation = Math.atan((x-lineArray[i].translation.x)/(y-lineArray[i].translation.y)) * -1; 
    }
})

addEventListener("mousemove", function(event){
    x = event.clientX;
    y = event.clientY;
    for (var i = 0; i < lineArray.length; i++) {    
        lineArray[i].rotation = Math.atan((x-lineArray[i].translation.x)/(y-lineArray[i].translation.y)) * -1; 
    }
})

two.update();