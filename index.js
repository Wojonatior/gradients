var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

const dpr = window.devicePixelRatio;
const STEP = 40;

canvas.width = window.innerWidth * dpr;
canvas.height = window.innerHeight * dpr;
context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 2;
const MAX_DISTANCE = Math.sqrt((window.innerWidth * window.innerWidth) + (window.innerHeight * window.innerHeight));
