const {capitalize, reverseString, calculator, cifradoCesar} = require('./functions_testing');
test('primera letra mayúscula', () => {
    expect(capitalize("casa")).toBe("Casa");
});

test('cambio de orden', () => {
    expect(reverseString("casa")).toBe("asac");
});

describe('calculator', () => {
    test('suma', () => {
        expect(calculator.add(3,4)).toBe(7);
    });
    test('resta', () => {
        expect(calculator.subtract(4,3)).toBe(1);
    });
    test('multiplicación', () => {
        expect(calculator.multiply(3,4)).toBe(12);
    });
    test('división', () => {
        expect(calculator.divide(3,1)).toBe(3);
    });
});

test('cifrado César', () => {
    expect(cifradoCesar("cAsa,", 3)).toBe("fDvd,");
});