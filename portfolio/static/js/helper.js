export function randomFloat(min, max){
    return Math.random() * (max - min) + min;
}

export function randomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}