import { sum } from './sum';

describe('Sum function tests', () => {
    it('should return a value greater than 10 when summing two numbers', () => {
        const result = sum(6, 5);
        expect(result).toBeGreaterThan(10);
    });
});

describe('Sum function tests', () => {
    it('should return a value greater than or equal to 20 when summing two numbers', () => {
        const result = sum(10, 10);
        expect(result).toBeGreaterThanOrEqual(20);
    });
});

describe('Sum function tests', () => {
    it('should return a value less than or equal to 8 when summing two numbers', () => {
        const result = sum(3, 4);
        expect(result).toBeLessThanOrEqual(8);
    });
});

describe('Sum function tests', () => {
    it('should return a value less than 12 when summing two numbers', () => {
        const result = sum(5, 6);
        expect(result).toBeLessThan(12);
    });
});

describe('Sum function tests', () => {
    it('should return 9 when summing two numbers', () => {
        const result = sum(4, 5);
        expect(result).toBe(9);
    });
});