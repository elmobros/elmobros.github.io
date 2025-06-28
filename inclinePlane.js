const canvas = document.getElementById("theCanvas");
const ctx = canvas.getContext("2d");

// incline plane shape

ctx.beginPath();
ctx.moveTo(0,400);
ctx.lineTo(500,400);
ctx.lineTo(0,100);
ctx.lineTo(0,400);
ctx.fillStyle = "#c0c0c0c0";
ctx.fill();
ctx.stroke();


// parameters

var x, y, vx, vy;
dt = 0.25;
var timer;
var gravity = 9.81;
var initialX = 30;
var initialY = 100;
var heightIncline = 400;
var rangeIncline = 665;
var lengthIncline = Math.sqrt(rangeIncline*rangeIncline + heightIncline*heightIncline);
var radiusSlider = document.getElementById("radiusSlider");
var ballRadius; 


// ball


ctx.beginPath();
ctx.arc(30,100,1,0,2*Math.PI);
ctx.fillStyle ="red";
ctx.fill();
ctx.stroke();


function drawObject() {
            ctx.beginPath();
            ctx.arc(x,y,ballRadius,0,2*Math.PI);
            ctx.fillStyle ="red";
            ctx.fill();
            ctx.stroke();
            
}


function moveObject() {
            
            if (y < 370) {
            var accel = gravity;

            var ax = accel * (rangeIncline / lengthIncline);
            var ay = accel * (heightIncline / lengthIncline);

            vx += ax * dt;
            vy += ay * dt;
            
            x += vx * dt;
            y += vy * dt;

            drawObject();

            }

            timer = window.setTimeout(moveObject, 2000/30);

}

function startMotion() {
    
            
            window.clearTimeout(timer);
            x = initialX;
            y = initialY;
            vx = 0;
            vy = 0;
            moveObject();
}

function stopMotion() {

}

function resumeMotion() {

}

function resetMotion() {

}

function showRadius() {
            radiusReadout.innerHTML = radiusSlider.value;
}

function newRadius() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.moveTo(0,400);
            ctx.lineTo(500,400);
            ctx.lineTo(0,100);
            ctx.lineTo(0,400);
            ctx.fillStyle = "#c0c0c0c0";
            ctx.fill();
            ctx.stroke();

            ballRadius = 15*Number(radiusSlider.value);

            ctx.beginPath();
            ctx.arc(30,100,ballRadius,0,2*Math.PI);
            ctx.fillStyle ="red";
            ctx.fill();
            ctx.stroke();
}

function updateRadius() {
            showRadius();
            newRadius();
}