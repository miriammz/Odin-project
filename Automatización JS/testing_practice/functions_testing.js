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

function cifradoCesar(string, desplazamiento) {
    string = string.split('');
    let codigo_desplazado = '';
    let string_final = '';

    //A=65, Z=90, a=97, z=122
    for (let i = 0; i < string.length; i++) {
        console.log(string[i].charCodeAt(0))
        if (string[i].charCodeAt(0) >= 97 && string[i].charCodeAt(0) <= 122) {
            //-97 la lleva a un rango 0-25, %26 hace que dé la vuelta al llegar a z y +97 la devuelve a su código real
            codigo_desplazado = String.fromCharCode(((string[i].charCodeAt(0) - 97 + desplazamiento) % 26) + 97);
            string_final = string_final + codigo_desplazado;

        } else if (string[i].charCodeAt(0) >= 65 && string[i].charCodeAt(0) <= 90) {
            //-65 la lleva a un rango 0-25, %26 hace que dé la vuelta al llegar a z y +65 la devuelve a su código real
            codigo_desplazado = String.fromCharCode(((string[i].charCodeAt(0) - 65 + desplazamiento) % 26) + 65);
            string_final = string_final + codigo_desplazado;
        } else {
            string_final = string_final + string[i];
        }
    }
    return string_final;
};
module.exports = {capitalize, reverseString, calculator, cifradoCesar};