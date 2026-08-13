import {Ship, Gameboard, Player} from "./battleship";
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

test('agua', () => {
    let ship = new Ship(4);
    let coordinates = ['C2', 'D2', 'E2', 'F2'];
    let coord = 'A2';
    let gameboard = new Gameboard();
    gameboard.placeShip(ship, coordinates);
    expect(gameboard.receiveAttack(coord)).toBe(false);
    expect(gameboard.fails).toContain(coord);
});

test('todos los barcos hundidos', () => {
    let ship1 = new Ship(3);
    let coordinates1 = ['E3', 'E4', 'E5'];
    let ship2 = new Ship(2);
    let coordinates2 = ['F2', 'G2'];
    let coord = ['E3', 'E4', 'E5', 'F2', 'G2'];
    let gameboard = new Gameboard();
    gameboard.placeShip(ship1, coordinates1);
    gameboard.placeShip(ship2, coordinates2);
    for (let i = 0; i < coord.length; i++) {
        gameboard.receiveAttack(coord[i]);
    }
    expect(gameboard.shipsSunk()).toBe(true);
});

test('Player', () => {
    let human = new Player('human');
    expect(human.gameboard).toBeInstanceOf(Gameboard);
});