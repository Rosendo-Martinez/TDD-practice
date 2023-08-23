import { reverseString } from "./reverseString"

test('reverse string Cow to equal woC', () => {
    expect(reverseString('Cow')).toBe('woC');
});

test('reverse string 1234567 to equal 7654321', () => {
    expect(reverseString('1234567')).toBe('7654321');
});

test('reverse string a to equal a', () => {
    expect(reverseString('a')).toBe('a');
});