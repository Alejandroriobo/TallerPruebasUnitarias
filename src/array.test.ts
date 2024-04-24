import { arrayContainsValue, arrayNotContainsValue } from './array';

describe('arrayContainsValue functions', () => {
    it('should return true if the array contains the value', () => {
        const arr = ['value1', 'value2', 'value3'];
        const value = 'value1';
        const result = arrayContainsValue(arr, value);
        expect(result).toBe(true);
    });

    it('should return false if the array does not contain the value', () => {
        const arr = ['value2', 'value3'];
        const value = 'value1';
        const result = arrayContainsValue(arr, value);
        expect(result).toBe(false);
    });
});

describe('arrayNotContainsValue function', () => {
    it('should return false if the array contains the value', () => {
        const arr = ['value1', 'value2', 'value3'];
        const value = 'value1';
        const result = arrayNotContainsValue(arr, value);
        expect(result).toBe(false);
    });

    it('should return true if the array does not contain the value', () => {
        const arr = ['value2', 'value3'];
        const value = 'value1';
        const result = arrayNotContainsValue(arr, value);
        expect(result).toBe(true);
    });
});
