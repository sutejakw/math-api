class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  _validateArgs(args, expectedLength) {
    if (args.length !== expectedLength) {
      throw new Error(`fungsi hanya menerima ${expectedLength} parameter`);
    }

    args.forEach((arg) => {
      if (typeof arg !== 'number') {
        throw new Error('fungsi hanya menerima parameter number');
      }
    });

    return args;
  }

  calculateRectanglePerimeter(...args) {
    const [length, width] = this._validateArgs(args, 2);

    // formula: (2 * (length + width))
    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    const [length, width] = this._validateArgs(args, 2);

    // formula: (length * width)
    return this._mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    const [sideA, sideB, base] = this._validateArgs(args, 3);

    // formula: (sideA + sideB) + basez
    return this._mathBasic.add(sideA, this._mathBasic.add(sideB, base));
  }

  calculateTriangleArea(...args) {
    const [base, height] = this._validateArgs(args, 2);

    // formula: (base * height) / 2
    return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;
