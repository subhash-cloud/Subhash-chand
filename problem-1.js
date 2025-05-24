class Calculator {
  constructor(a, b, operator) {
    this.a = a;
    this.b = b;
    this.operator = operator;
  }

  calculate() {
    switch (this.operator) {
      case "+": {
        console.log(this.a + this.b);
      }
      case "-": {
        console.log(this.a - this.b);
      }
      case "*": {
        console.log(this.a * this.b);
      }
      case "/": {
        console.log(this.a / this.b);
      }
    }
  }
}

const user = new Calculator(1, 2, "+");

user.calculate();
