import {Ship, Gameboard} from "./battleship";
test('barco hundido', () => {
    let ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});

test('barco no hundido', () => {
    let ship = new Ship(5);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
});

test('barco colocado', () => {
    let ship = new Ship(5);
    let coordinates = ['A1', 'A2', 'A3', 'A4', 'A5'];
    let gameboard = new Gameboard();
    expect(gameboard.placeShip(ship, coordinates)).toBe(true);
});

test('tocado', () => {
    let ship = new Ship(4);
    let coordinates = ['C2', 'D2', 'E2', 'F2'];
    let coord = 'D2';
    let gameboard = new Gameboard();
    gameboard.placeShip(ship, coordinates);
    expect(gameboard.receiveAttack(coord)).toBe(true);
});