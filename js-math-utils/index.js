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

export const getNumMayor = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

export const getHigherNumberFromArray = (arrayNumbers) => {
  return arrayNumbers.reduce((acc, valorActual) => {
    return acc > valorActual ? acc : valorActual;
  }, null);
};

export const getNumMenor = (num1, num2) => {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
};

const funcionPerimetro = (num1, num2) => {
  return (num1*2) + (num2*2)
}

