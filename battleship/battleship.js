class Ship {
    constructor(length) {
        this.length = length;
        this.hitCount = 0;
        this.sunk = false;
    }

    hit() {
        this.hitCount++;
    }

    isSunk() {
        if (this.length === this.hitCount) {
            this.sunk = true;
        } else {
            this.sunk = false;
        }
        return this.sunk;
    }
}

class Gameboard {
    constructor() {
        this.shipsLocated = [];
        this.fails = [];
    }

    placeShip(ship, coordinates) {
        this.shipsLocated.push({ship, coordinates});
        return true;
    }

    receiveAttack(coord) {
        for (let i = 0; i < this.shipsLocated.length; i++) {
            for (let j = 0; j < this.shipsLocated[i].coordinates.length; j++) {
                if (coord === this.shipsLocated[i].coordinates[j]) {
                    this.shipsLocated[i].ship.hit();
                    return true;
                }
            }
        }
        this.fails.push(coord);
        return false;
    }

    shipsSunk() {
        let status = [];
        for (let i = 0; i < this.shipsLocated.length; i++) {
            status.push(this.shipsLocated[i].ship.isSunk());
        }
        return this.shipsLocated.every(entry => entry.ship.isSunk()); //mira si todos cumplen una condición
    }
}
module.exports = {Ship, Gameboard};