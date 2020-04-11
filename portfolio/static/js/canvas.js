import { randomInt, randomFloat } from "./helper";
import { Circle } from "./components";

export var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



export let CircleArray = function(size){
    this.circleArray = [];
    this.create = function(){
        for (var i = 0; i < size; i++){
            let radius = randomFloat(30, 50);
            let x = randomFloat(radius, innerWidth - radius);
            let y = randomFloat(radius, innerHeight - radius);
            let dx = randomFloat(-2,2);
            let dy = randomFloat(-2,2);
            this.circleArray.push(new Circle(radius, x, y, dx, dy));
            console.log(circleArray);
        }
    }
    this.animate = function(){
        requestAnimationFrame(() => this.animate());
        context.clearRect(0, 0, innerWidth, innerHeight);
        for (var i = 0; i < size; i++){
            this.circleArray[i].update();
        }
    }
}