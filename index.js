var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

const DPR = window.devicePixelRatio || 1;
const SIZE = window.innerWidth * .33;
const STEP = SIZE  / 11;
const PALLET = [
  '#f2d7ee',
  '#d3bcc0',
  '#a5668b',
  '#69306d',
  '#0e103d'
]

canvas.width = SIZE * DPR;
canvas.height = SIZE * DPR;
context.scale(DPR, DPR);
context.lineWidth = 2;

const get2Colors = () => {
  const shuffledArray = PALLET.sort( function() { return 0.5 - Math.random() } );
  return [shuffledArray[0], shuffledArray[1]];
};

const getGradientScaling = () => { return STEP * (Math.random() + 1) };

const getGradient = () => {
    const gradient = context.createLinearGradient(x, y, x+getGradientScaling(), y+getGradientScaling());
    const selectedColors = get2Colors();
    gradient.addColorStop(0, selectedColors[0]);
    gradient.addColorStop(1, selectedColors[1]);
    return gradient;
};

for(var x=STEP; x <= SIZE - STEP + 1; x+=STEP){
  for(var y=STEP; y <= SIZE - STEP + 1; y+=STEP){
    context.fillStyle = getGradient();
    context.fillRect(x, y, x+STEP, y+STEP);
    context.strokeStyle = getGradient();
    context.strokeRect(x, y, x+STEP, y+STEP);
  }
}
