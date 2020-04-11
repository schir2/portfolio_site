import { canvas } from "./canvas";

var context = canvas.getContext('2d');
var strokeColor = 'black';

export function Circle(radius, x, y, dx, dy) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    
    this.draw = function () {
        context.beginPath();
        context.fillStyle = 'green';
        context.arc(this.x, this.y, this.radius, 0,Math.PI * 2, false);
        context.strokeStyle=strokeColor;
        context.fill();
        context.stroke();
    }
    this.update = function (){
        if (this.x + radius >= innerWidth || this.x - radius <= 0){
            this.dx = -this.dx;
        }
        if (this.y + radius >= innerHeight || this.y - radius <= 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
};