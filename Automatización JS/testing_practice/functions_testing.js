function capitalize(string) {
    string = string[0].toUpperCase() + string.slice(1);
    return string;
}

function reverseString(string) {
    string = (string.split('')).reverse();
    return string.join('');
}

const calculator = (() => {
    const add = (a, b) => {
        return a + b;
    };
    const subtract = (a, b) => {
        return a - b;
    };
    const multiply = (a,b) => {
        return a*b;
    };
    const divide = (a,b) => {
        return a/b;
    };
    return {add, subtract, multiply, divide};
})();
module.exports = {capitalize, reverseString, calculator};