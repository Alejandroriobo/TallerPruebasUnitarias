import { div } from "./div";

describe('División correctas', () => {
    it('Debería dividir 10 por 2 y obtener 5', () => {
      const resultado = div(10, 2);
      expect(resultado).toBe(5);
    });
  
    it('Debería dividir 15 por 3 y obtener 5', () => {
      const resultado = div(15, 3);
      expect(resultado).toBe(5);
    });
  
    it('Debería dividir -10 por 2 y obtener -5', () => {
      const resultado = div(-10, 2);
      expect(resultado).toBe(-5);
    });
  
    it('Debería dividir 0 por 1 y obtener 0', () => {
      const resultado = div(0, 1);
      expect(resultado).toBe(0);
    });

});

describe('Prueba controlada de error división por cero', () => {
    it('Debería dividir 0 por 1 y obtener 0', () => {
      const resultado = div(5, 0);
      expect(resultado).toBe(Infinity);
    });
    });
  
  
  