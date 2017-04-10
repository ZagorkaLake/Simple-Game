
window.addEventListener('mouseup', function(e) {
    targetX  = e.pageX;
    targetY = e.pageY;
});

var ctx = document.getElementById("canvas").getContext("2d"),
    x = 300,
    y = 0,
    targetX = Math.random()*300,
    targetY = Math.random()*300,
    velX = 0,
    velY = 0,
    thrust = 5;


function draw(){
    var tx = targetX - x,
        ty = targetY - y,
        dist = Math.sqrt(tx*tx+ty*ty),
        rad = Math.atan2(ty,tx),
        angle = rad/Math.PI * 180;;


    velX = (tx/dist)*thrust;
    velY = (ty/dist)*thrust;

    if(dist > 1){
        x += velX;
        y += velY;
    }

    ctx.fillStyle = "#ccc";
    ctx.clearRect(0,0,800,600);
    ctx.beginPath();
    ctx.rect(x, y, 10, 10);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#ff0";
    ctx.beginPath();
    ctx.rect(targetX, targetY, 10, 10);
    ctx.closePath();
    ctx.fill();

    setTimeout(function(){draw()}, 30);
}

draw();