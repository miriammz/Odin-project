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

test('almacenar aciertos en array', () => {
    let ship = new Ship(4);
    let coordinates = ['C2', 'D2', 'E2', 'F2'];
    let coord = 'D2';
    let computer = new Player('computer');
    computer.gameboard.placeShip(ship, coordinates);
    expect(computer.gameboard.receiveAttack(coord)).toBe(true);
    expect(computer.gameboard.tick).toContain(coord);
});

test('ataque aleatorio del ordenador', () => {
    let ship = new Ship(4);
    let coordinates = ['C2', 'D2', 'E2', 'F2'];
    let computer = new Player('computer');
    let rival = new Player('human');
    rival.gameboard.placeShip(ship, coordinates);
    let tick = rival.gameboard.tick.length;
    let fails = rival.gameboard.fails.length;
    let validAttack = computer.computerAttack(rival.gameboard);
    if (validAttack) {
        expect(tick + 1).toBe(rival.gameboard.tick.length);
    } else {
        expect(fails + 1).toBe(rival.gameboard.fails.length);
    }
});

test('IA casillas adyacentes', () => {
    let ship = new Ship(4);
    let coordinates = ['D6', 'E6', 'F6', 'G6'];
    let computer = new Player('computer');
    let rival = new Player('human');
    rival.gameboard.placeShip(ship, coordinates);
    jest.spyOn(Math, 'random').mockReturnValue(0.5); //devuelve siempre lo mismo para Math.random()
    expect(computer.computerAttack(rival.gameboard)).toBe(true);
    expect(coordinates).toContain(computer.lastHit);
    expect(computer.coordPosibles).toEqual(['E6', 'G6', 'F5', 'F7']);
});