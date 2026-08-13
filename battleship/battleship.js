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
        this.tick = [];
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
                    this.tick.push(coord);
                    return true;
                }
            }
        }
        this.fails.push(coord);
        return false;
    }

    shipsSunk() {
        return this.shipsLocated.every(entry => entry.ship.isSunk()); //mira si todos cumplen una condición
    }
}

class Player {
    constructor(typeOfPlayer) {
        this.gameboard = new Gameboard();
        this.typeOfPlayer = typeOfPlayer;
        this.lastHit = null;
        this.coordPosibles = [];
    }

    computerAttack(gameboardRival) {
        const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        let coord;
        if (this.coordPosibles.length > 0) {
            let index = Math.floor(Math.random()*this.coordPosibles.length);
            coord = this.coordPosibles[index];
            this.coordPosibles.splice(index, 1);
        } else {
            coord = `${letras[Math.floor(Math.random()*letras.length)]}${numbers[Math.floor(Math.random()*numbers.length)]}`;
        }
        let acierto;
        if (gameboardRival.tick.includes(coord) || gameboardRival.fails.includes(coord)) {
            return this.computerAttack(gameboardRival);
        } else {
            acierto = gameboardRival.receiveAttack(coord);
            if (acierto) {
                this.lastHit = coord;
                let letraIndex = letras.indexOf(this.lastHit[0]); //se obtiene la posición en el array en este caso de F
                let numero = Number(this.lastHit.slice(1));
                this.coordPosibles = [(`${letras[letraIndex - 1]}${numero}`), (`${letras[letraIndex + 1]}${numero}`), (`${letras[letraIndex]}${numero - 1}`), (`${letras[letraIndex]}${numero + 1}`)]; 
                this.coordPosibles = this.coordPosibles.filter(coord => letras.includes(coord[0]) && numbers.includes(coord.slice(1)) && !gameboardRival.tick.includes(coord) && !gameboardRival.fails.includes(coord));
            }
            return acierto;
        }
    }
}
export {Ship, Gameboard, Player};