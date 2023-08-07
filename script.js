const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
console.log(ctx);
canvas.width = 600;
canvas.height = 600;
ctx.strokeStyle = "black";

class Fractle {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.size = canvasWidth * 0.15;
    
}
  draw(context) {
    context.translate(this.canvasWidth/2, this.canvasHeight/2)
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(this.size, 0);
    context.stroke();
  }
}

const fractle1 = new Fractle(canvas.width, canvas.height);
fractle1.draw(ctx);

class Particle {}

class Rain {}
