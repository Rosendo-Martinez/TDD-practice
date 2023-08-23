import {capitalize} from './capitalize'

test('capitalize apple to equal Apple', () => {
    expect(capitalize('apple')).toBe('Apple');
});

test('capitalize z to equal Z', () => {
    expect(capitalize('z')).toBe('Z');
});

test('does nothing to already capitalized string', () => {
    expect(capitalize('Blue')).toBe('Blue');
});