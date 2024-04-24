import { n, notFalse, notTrue, number } from './multi';

describe('Variable n test', () => {
    it('should test that n is null', () => {
        expect(n).toBeNull();
    });
});

describe('Variable n test', () => {
    it('should test that n is defined (not undefined)', () => {
        expect(n).toBeDefined();
    });
});

describe('Variable number test', () => {
    it('should test that number is equal to 0', () => {
        expect(number).toBe(0);
    });
});

describe('Variable notTrue test', () => {
    it('should test that notTrue is false', () => {
        expect(notTrue).toBeFalsy();
    });
});

describe('Variable notFalse test', () => {
    it('should test that notFalse is true', () => {
        expect(notFalse).toBeTruthy();
    });
});

