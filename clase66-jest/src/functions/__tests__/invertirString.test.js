import invertirString from "../invertirString";

// prueba No1.
test("Debe retornar un string invertido", () => {
  // Probamos
  // Expected: acimacA
  expect(invertirString("Acamica")).toBe("acimacA");
  // Received: acimaca
});

// prueba No2.
it("Should return Empty string", () => {
  const result = invertirString("");
  expect(result).toBe("");
});

// prueba No3.
it("Should return undefined", () => {
  const result = invertirString();

  const result2 = invertirString(23234);

  expect(result).toBeUndefined();
  expect(result2).toBe(undefined);
});

// prueba No4.
it("Should return undefined if argument is NOT typeof string", () => {
  const result = invertirString(13232);
  expect(result).toBeUndefined();
});
