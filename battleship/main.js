import {Ship, Player} from "./battleship.js";

let ship1 = new Ship(4);
let coordinates1 = ['C2', 'D2', 'E2', 'F2'];
let ship2 = new Ship(3);
let coordinates2 = ['A2', 'A3', 'A4'];

let ship3 = new Ship(5);
let coordinates3 = ['D2', 'E2', 'F2', 'G2', 'H2'];
let ship4 = new Ship(2);
let coordinates4 = ['E5', 'E6'];

let computer1 = new Player('computer1');
computer1.gameboard.placeShip(ship1, coordinates1);
computer1.gameboard.placeShip(ship2, coordinates2);
let computer2 = new Player('computer2');
computer2.gameboard.placeShip(ship3, coordinates3);
computer2.gameboard.placeShip(ship4, coordinates4);

while (!computer1.gameboard.shipsSunk() && !computer2.gameboard.shipsSunk()) {
    computer1.computerAttack(computer2.gameboard);
    computer2.computerAttack(computer1.gameboard);
}

if (computer1.gameboard.shipsSunk()) {
    console.log("Ha ganado el jugador 2");
} else {
    console.log("Ha ganado el jugador 1");
}