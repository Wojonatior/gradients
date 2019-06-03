import React, { Component } from "react";

class Gradential extends Component {

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext("2d");
    this.draw(canvas, context);
  }

  draw(canvas, context) {
    const DPR = window.devicePixelRatio || 1;
    const SIZE = window.innerWidth * .33;
    const STEP = SIZE  / 11;
    const PALLET = [
      '#F2D7EE',
      '#D3BCC0',
      '#A5668B',
      '#69306D',
      '#0E103D'
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
  }

  getContainerStyles() {
    return {};
  }

  render() {
    return (
      <div style={this.getContainerStyles()}>
        <canvas ref={this.canvasRef} id="canvas"></canvas>
      </div>
    );
  }

}

export default Gradential;

