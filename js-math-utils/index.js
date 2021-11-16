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


export const menor = numeros.reduce(function(menor, numero) {
  if(menor > numero) {
     menor = numero;
  }
  return menor;
}, numeros[0]);

// agregó el git add y git commit

export const potencia = ((valor,potencia) => {
  return math.pow(valor,potencia);
});

potencia(2,3);

// 
export const raiz = (numero) => { 
  return math.sqrt(numero);
}


export const perimetroRectangulo = (base, altura) => {
  return 2 * (base + altura);
}


