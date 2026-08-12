let globalAge = 23;

function printAge (age) {
    var varAge = 34;

    if (age > 0) {
        const constAge = age * 2;
        console.log(constAge);
    }
}

printAge(globalAge);

function makeAddingFunction(firstNumber) {
    return function returnedFunction(secondNumber) {
        return firstNumber + secondNumber;
    }
}

const add5 = makeAddingFunction(5);
console.log(add5(2));

//constructor:
function User(name) {
    this.name = name;
    this.discordName = "@" + name;
}

//factory function:
function createUser(name) {
    const discordName = "@" + name;
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => {reputation++; };
    return {name, discordName, getReputation, giveReputation};
}

const josh = createUser("Josh");
josh.giveReputation();
josh.giveReputation();

console.log({discordName: josh.discordName, reputation: josh.getReputation()});

function createPlayer(name, level) {
    const {getReputation, giveReputation} = createUser(name);
    const getLevel = () => level;
    const increaseLevel = () => {level++; };
    return {name, getReputation, giveReputation, getLevel, increaseLevel};
}

function createPlayer2(name, level) {
    const user = createUser(name);

    const getLevel = () => level;
    const increaseLevel = () => { level++; };
    //si tenemos muchos objetos de los que queremos coger cosas usamos assign
    return Object.assign({}, user, { getLevel, increaseLevel });
}


const calculator = (() => {
    let lastResult;

    const add = (a, b) => {
        lastResult = a + b;
        return lastResult;
    };
        const subtract = (a, b) => {
        lastResult = a - b;
        return lastResult;
    };
        const multiply = (a, b) => {
        lastResult = a * b;
        return lastResult;
    };
        const divide = (a, b) => {
        lastResult = a / b;
        return lastResult;
    };
    const getLastResult = () => lastResult;

    return { add, subtract, multiply, divide, getLastResult };
})();

console.log(calculator.add(3, 5)); // 8
console.log(calculator.subtract(6, 2)); // 4
console.log(calculator.getLastResult()); // 4
console.log(calculator.multiply(14, 5534)); // 77476
