        var theCanvas = document.getElementById("theCanvas");
        var theContext = theCanvas.getContext("2d");
        var width = theCanvas.width;
        var height = theCanvas.height;
        var newtonG = 6.67e-11; // grav. constant in SI units
        var earthMass = 5.97e24; // kilograms
        var dt = 5; // time step in seconds
        var earthRadius = 6371000; // meters
        var mountainHeight = earthRadius * 0.165; // chosen to match image
        var timer;
        var x, y, vx, vy;
        var speedSlider = document.getElementById("speedSlider");
        var speedReadout = document.getElementById("speedReadout");

        var moveOn;

        moveProjectile();

         

        function drawProjectile() {
            var metersPerPixel = earthRadius / (0.355 * theCanvas.width);
            var pixelX = theCanvas.width/2 + x/metersPerPixel;
            var pixelY = theCanvas.height/2 - y/metersPerPixel;
            theContext.beginPath();
            theContext.arc(pixelX,pixelY,5,0,2*Math.PI);
            theContext.fillStyle ="red";
            theContext.fill();
        }

        function moveProjectile() {
            if (moveOn==true) {
            var r = Math.sqrt(x*x + y*y);
            if (r > earthRadius) {
            var accel = newtonG * earthMass / (r * r);

            var ax = -accel * x / r;
            var ay = -accel * y / r;

            vx += ax * dt;
            vy += ay * dt;
            var lastx = x;
            x += vx * dt;
            y += vy * dt;
            
            drawProjectile();
            }
            }

            if (!((lastx < 0) && (x >= 0))) {
            timer = window.setTimeout(moveProjectile, 1000/30);
            }
        }

        function fireProjectile() {
            
            moveOn = true;
            theContext.clearRect(0, 0, theCanvas.width, theCanvas.height);
            
            window.clearTimeout(timer);
            x = 0;
            y = earthRadius + mountainHeight;
            vx = Number(speedSlider.value);
            vy = 0;
            moveProjectile();
        }

        function stopProjectile() {
            moveOn = false;
        }

        function resumeProjectile () {
            window.clearTimeout(timer);
            moveOn = true;
            moveProjectile();
        }

        function resetProjectile() {
            moveOn = false;
            theContext.clearRect(0, 0, theCanvas.width, theCanvas.height);
        }

        function showSpeed() {
            speedReadout.innerHTML = speedSlider.value;
        }