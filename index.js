var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

const dpr = window.devicePixelRatio;

const SIZE = (window.innerWidth / 2) * dpr;
canvas.width = SIZE;
canvas.height = SIZE;
//context.scale(dpr, dpr);
const STEP = SIZE  / 9;

context.lineCap = 'square';
context.lineWidth = 2;

const getUpTo2x = () => { return STEP * (Math.random() + 1) };

const getGradient = () => {
    var gradient = null;
    const whiteBlack = Math.random() > .5 ? 'white' : 'black';
    gradient = context.createLinearGradient(x, y, x+getUpTo2x(), y+getUpTo2x());
    if(Math.random() < .5) {
      gradient.addColorStop(0, whiteBlack);
      gradient.addColorStop(1, 'blue');
    } else {
      gradient.addColorStop(1, whiteBlack);
      gradient.addColorStop(0, 'blue');
    }
    return gradient;
}

for(var x=STEP; x <= SIZE - STEP + 1; x+=STEP){
  for(var y=STEP; y <= SIZE - STEP + 1; y+=STEP){
    var gradient = getGradient();
    context.fillStyle = gradient;
    context.fillRect(x, y, x+STEP, y+STEP);
    gradient = null;
    //context.fill();
  }
}
