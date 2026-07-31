function capitalize(string) {
    string = string[0].toUpperCase() + string.slice(1);
    return string;
}

function reverseString(string) {
    string = (string.split('')).reverse();
    return string.join('');
}
module.exports = {capitalize, reverseString};