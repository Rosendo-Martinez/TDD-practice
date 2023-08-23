import { caesarCipher } from "./caesarCipher"

test('abc shifted by 1 to equal bcd', () => {
    expect(caesarCipher('abc',1)).toBe('bcd');
});

test('abc shifted by -1 to equal zab', () => {
    expect(caesarCipher('abc',-1)).toBe('zab');
});

test('efgh shifted by 27 to equal efgh', () => {
    expect(caesarCipher('efgh',27)).toBe('efgh');
});

test('efgh shifted by -28 to equal defg', () => {
    expect(caesarCipher('efgh',-28)).toBe('defg');
});

test('efgh shifted by 55 to equal fghi', () => {
    expect(caesarCipher('efgh',55)).toBe('fghi');
});

test('123 ab ?!@ shifted by 3 to equal 123 de ?!@', () => {
    expect(caesarCipher('123 ab ?!@',3)).toBe('123 de ?!@');
});