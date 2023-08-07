const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
console.log(ctx);
canvas.width = 600;
canvas.height = 600;
ctx.strokeStyle = "black";
ctx.lineWidth = 20;
ctx.lineCap = "round";

class Fractle {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.size = canvasWidth * 0.25;
    this.sides = 1;
  }
  draw(context) {
    context.save();
    context.translate(this.canvasWidth / 2, this.canvasHeight / 2);
    for (let i = 0; i < this.sides; i++) {
      this.#drawLine(context);
      context.rotate((Math.PI * 2) / this.sides);
    }
    context.restore();
  }
  #drawLine(context, level) {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(this.size, 0);
    context.stroke();
    // We wiill draw our fractal, making this private drawLine method call iself over and over: basically Recursion.
    context.save();
    // context.rotate(1)
    this.#drawLine(context);
    context.restore();
  }
}

const fractle1 = new Fractle(canvas.width, canvas.height);
fractle1.draw(ctx);

class Particle {}

class Rain {}
