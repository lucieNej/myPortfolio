var canvas = document.querySelector('canvas');
var uno = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight/3;

function Circle (x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        uno.beginPath();
        uno.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        uno.fillStyle = "#d1690e";
        uno.strokeStyle = "#d1690e";
        uno.stroke();
        uno.fill();
    };

    this.update = function () {
        if(this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        this.x += this.dx;
        if(this.y + this.radius > window.innerHeight/3 || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.y += this.dy;
        this.draw();
    }
}

var circleArray = [];

for (var i = 1; i < 16; i++) {
    var x = 30 + (Math.random() * (window.innerWidth-60));
    var y = 30 + (Math.random() * (window.innerHeight/3-60));
    var dx = (Math.random() - 0.5) * 4;
    var dy = (Math.random() - 0.5) * 4;
    var radius = 30;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate () {
    requestAnimationFrame(animate);
    uno.clearRect(0,0,window.innerWidth, window.innerHeight);

    for (var i = 0; i < circleArray.length ; i++) {
        circleArray[i].update();
    }
}

animate();