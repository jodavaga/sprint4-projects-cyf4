export const sumar = (num1, num2) => {
  console.log(`a sumatoria es: ${num1 + num2}`);
  return num1 + num2;
};

export const resta = (num1, num2) => {
  console.log(`La resta es: ${num1 - num2}`);
  return num1 - num2;
};

export const displayNumberByConsole = (number) => {
  if (!number) return;
  if (typeof number !== "number") return "Recuerda debes ingresar un numero";

  console.log(`Su numero ingresado es: ${number}`);
  return number;
};

export const higherNumber = (arrayNumbers) => {
  const higherNum = arrayNumbers.reduce((acc, actual) => {
    return acc > actual ? acc : actual;
  }, null);

  console.log(higherNum);
};
