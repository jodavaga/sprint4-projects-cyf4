function invertirString(stringEntrada) {
  if (typeof stringEntrada !== "string") return;
  if (!stringEntrada.length) return "";

  const arrayString = stringEntrada.split("");
  const arrayInvertido = arrayString.reverse();
  const stringSalida = arrayInvertido.join("");
  return stringSalida;
}

export default invertirString;
