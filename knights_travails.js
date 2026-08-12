const movements = [[1,2], [1,-2], [-1,-2], [-1,-2], [2,1], [2,-1], [-2,1], [-2,-1]];

function getValidMoves(position) {
    let array = [];
    for (let i = 0; i < movements.length; i++) {
        array.push([movements[i][0] + position[0], movements[i][1] + position[1]]);
    }

    //descartar resultados fuera del tablero (fuera de 0 - 7)
    let validMoves;
    validMoves = array.filter(([x,y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7);
    return validMoves;
}

function knightMoves(start, end) {
    let queue = [[start]];
    let visited = new Set([start.toString()]);
    while (queue.length > 0) {
        let first = queue.shift();
        let last = first.at(-1);
        if (last.toString() === end.toString()) {
            console.log(`You made it in ${first.length - 1} moves! Here's your path: `);
            first.forEach(pos => console.log(`[${pos}]`));
            return;
        } else {
            let valid = getValidMoves(last);
            for (let i = 0; i < valid.length; i++) {
                if (!visited.has(valid[i].toString())) {
                    visited.add(valid[i].toString());
                    let newArray = [...first, valid[i]];
                    queue.push(newArray);
                }
            }
        }
    }
}

knightMoves([2,3],[4,3]);