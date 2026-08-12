function Person(name) {
    this.name = name;
};

function Player (name, marker) {
    this.name = name;
    this.marker = marker;
};

Person.prototype.sayName = function() {
    console.log(`Hello! I'm ${this.name}!`);
};

Player.prototype.getMarker = function() {
    console.log(`My marker is: "${this.marker}"`);
};

//ahora hacemos que Player herede de Person
Object.setPrototypeOf(Player.prototype, Person.prototype); //esto SIEMPRE ANTES de crear los objetos!!!!!

const player1 = new Player("Steve", "X");
const player2 = new Player("Mark", "O");

Player.prototype.sayHello = function () {
    console.log("Hello!!!")
};
player1.sayHello();
player2.sayHello();

player1.getMarker();
player2.getMarker();


//Object.getPrototypeOf(player1) === Player.prototype;
//Object.getPrototypeOf(Player.prototype) === Object.prototype;
//player1.valueOf();