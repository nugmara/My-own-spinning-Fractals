# My-own-spinning-Fractals

# Fractal Drawing with Canvas

<div align="center">
<img src="./images/spinning-fractals.gif"/>
</div>

This JavaScript code creates a fractal drawing using HTML5 Canvas. It generates an intricate geometric pattern resembling a fractal tree and renders it on an HTML canvas.

## Getting Started

### Prerequisites

To run this code, you need a modern web browser that supports HTML5 and JavaScript.

### Installation

1. Clone the repository or download the code to your local machine.

```bash
git clone https://github.com/your-repo/fractal-canvas.git
```

2. Open the `index.html` file in your web browser.

## Usage

1. Open the `index.html` file in your web browser.
2. You will see a canvas element containing the fractal drawing.

## Code Overview

The code does the following:

- Initializes an HTML canvas element and sets up its context.
- Defines a `Fractal` class responsible for drawing the fractal pattern.
- The `Fractal` class uses recursion to create intricate patterns with varying colors and sizes.
- The `Particle` and `Rain` classes are currently empty and can be used for future extensions or additional features.

## Customize

You can customize the fractal by modifying the properties in the \`Fractal\` class constructor:

```javascript
const fractal1 = new Fractal(canvas.width, canvas.height);
```

- `sides`: The number of sides in the fractal shape.
- `maxLevel`: The maximum recursion depth for drawing.
- `scale`: The scaling factor applied to each branch.
- `spread`: The angle between branches.
- `branches`: The number of branches at each level.
- `color`: The color of the fractal (generated randomly).

## Contributing

Feel free to contribute to this project by adding new features, improving the code, or fixing issues. Pull requests are welcome. Learned with Franks Laboratory.


