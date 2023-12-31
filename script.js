const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
console.log(ctx);
canvas.width = 900;
canvas.height = 900;
// ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.lineCap = "round";
ctx.shadowColor = "black";
ctx.shadowOffSetY = 10;
ctx.shadowOffSetX = 5;
ctx.shadowBlur = 10;

class Fractle {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.size = canvasWidth * 0.25;
    this.sides = 25;
    this.maxLevel = 4;
    this.scale = 0.7;
    this.spread = Math.random() * 6 + 2;
    this.branches = 1;
    this.color = "hsl(" + Math.random() * 360 + ", 75%, 50%)";
  }
  draw(context) {
    context.strokeStyle = this.color;
    context.save();
    context.translate(this.canvasWidth / 2, this.canvasHeight / 2);
    for (let i = 0; i < this.sides; i++) {
      this.#drawLine(context, 0);
      context.rotate((Math.PI * 2) / this.sides);
    }
    context.restore();
  }
  #drawLine(context, level) {
    if (level > this.maxLevel) return;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(this.size, 0);
    context.arc(this.size * 1.5, 0, 50, 0, Math.PI * 2);
    context.fill();
    // context.strokeRect(this.size * 1.2, 0, 50, 50);
    // context.bezierCurveTo(20, 100, 200, 100, 200, 20);
    context.stroke();

    for (let i = 0; i < this.branches; i++) {
      // We will draw our fractal, making this private drawLine method call iself over and over: basically Recursion.
      context.save();
      context.translate(this.size - (this.size / this.branches) * i, 0);
      context.scale(this.scale, this.scale);

      context.save();
      context.rotate(this.spread);
      this.#drawLine(context, level + 1);
      context.restore();

      context.save();
      context.rotate(-this.spread);
      this.#drawLine(context, level + 1);
      context.restore();
      context.restore();
    }
  }
}

const fractle1 = new Fractle(canvas.width, canvas.height);
fractle1.draw(ctx);

class Particle {}

class Rain {}
