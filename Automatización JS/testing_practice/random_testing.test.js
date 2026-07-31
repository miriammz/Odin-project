const {capitalize, reverseString} = require('./functions_testing');
test('primera letra mayúscula', () => {
    expect(capitalize("casa")).toBe("Casa");
});

test('cambio de orden', () => {
    expect(reverseString("casa")).toBe("asac");
});