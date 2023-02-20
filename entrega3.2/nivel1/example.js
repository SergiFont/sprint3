class Middleware {
  constructor(target) {
    this.target = target;
    this.middlewares = [];

    const prototype = Object.getPrototypeOf(this.target);
    Object.getOwnPropertyNames(prototype).forEach((fn) => {
      if (fn !== "constructor") this.createFn(fn);
    });
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }

  executeMiddleware(num1, num2) {
    this.middlewares.forEach((middleware) => {
      middleware.call(this, num1, num2);
    });
  }

  createFn(fn) {
    this[fn] = (num1, num2) => {
      this.executeMiddleware(num1, num2);
      return this.target[fn].call(this.target, num1, num2);
    };
  }
}


class Calculator {
  addition = (num1, num2) => {
    console.log(
      `Finalmente, el resultado de sumar ${num1} con ${num2} es: ${num1 + num2}`
    );
    console.log("------------------------");
    return num1 + num2;
  };
  subtraction = (num1, num2) => {
    console.log(
      `Finalmente, el resultado de restar ${num1} con ${num2} es: ${num1 - num2}`
    );
    console.log("------------------------");
    return num1 - num2;
  };
  multiply = (num1, num2) => {
    console.log(
      `Finalmente, el resultado de multiplicar ${num1} con ${num2} es: ${num1 * num2}`
    );
    console.log("------------------------");
    return num1 * num2;
  };
}

const calc = new Calculator();
const middleware = new Middleware(calc);

middleware.use((num1, num2) => {
  console.log(`Middleware executed: multiplying ${num1} and ${num2}`);
  return num1 * num2;
});

middleware.addition(2, 3); // Output: "Middleware executed: multiplying 2 and 3" followed by "Result: 6"

