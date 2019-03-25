var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

const dpr = window.devicePixelRatio;

const SIZE = (window.innerWidth / 2) * dpr;
canvas.width = SIZE;
canvas.height = SIZE;
context.scale(dpr, dpr);
const STEP = SIZE  / 8;

context.lineCap = 'square';
context.lineWidth = 2;
const MAX_DISTANCE = Math.sqrt((window.innerWidth * window.innerWidth) + (window.innerHeight * window.innerHeight));


for(var x=0; x<=SIZE - STEP; x+=STEP){
  for(var y=0; y<=SIZE - STEP; y+=STEP){
    console.log(x, y);
    context.rect(x, y, x+STEP, y+STEP);
    context.fillStyle = "rgba(255, 255, 255, 0)";
    context.stroke();
  }
}
