import{anything, anything1} from './string'

describe('Pruebas de cadenas', () => {
    it('Probar que "anything" contiene "UN"', () => {
      expect(anything).toContain('UN');
    });
  
    it('Probar que "anything" no contiene "P"', () => {
      expect(anything).not.toContain('P');
    });
  
    it('Probar que "anything1" contiene la letra "n"', () => {
      expect(anything1).toMatch(/n/); // O: expect(anything1.includes('n')).toBeTruthy();
    });
  });
  