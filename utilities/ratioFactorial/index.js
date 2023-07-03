const factorialOfNumber = require("../utilities/factorial/index");
const ratioOfNumber = require("../utilities/ratio/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfNumber(num1, num2);
  const factorial = factorialOfNumber(num3);
  return { ratio: ratio, factorial: factorial };
};

module.exports = ratioAndFactorial;
