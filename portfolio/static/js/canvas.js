let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let strokeColor = 'black';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function randomFloat(min, max){
    return Math.random() * (max - min) + min;
}

function randomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function Circle(radius, x, y, dx, dy) {
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
    };
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


class CircleArray {
    constructor(size) {
        this.size = size
        this.circleArray = []
    }

    create(){
        for (var i = 0; i < this.size; i++){
            let radius = randomFloat(30, 50);
            let x = randomFloat(radius, innerWidth - radius);
            let y = randomFloat(radius, innerHeight - radius);
            let dx = randomFloat(-2,2);
            let dy = randomFloat(-2,2);
            this.circleArray.push(new Circle(radius, x, y, dx, dy));
            console.log(this.circleArray);
        }
    };
    animate = function(){
        requestAnimationFrame(() => this.animate());
        context.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < this.size; i++){
            this.circleArray[i].update();
        }
    }
}

let circleArray = new CircleArray(5);
circleArray.create();
circleArray.animate();

