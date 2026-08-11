const movements = [[1,2], [1,-2], [-1,-2], [-1,-2], [2,1], [2,-1], [-2,1], [-2,-1]];

function getValidMoves(position) {
    let array = [];
    for (let i = 0; i < movements.length; i++) {
        array.push([movements[i][0] + position[0], movements[i][1] + position[1]]);
    }
    console.log(array)

    //descartar resultados fuera del tablero (fuera de 0 - 7)
    let validMoves;
    validMoves = array.filter(([x,y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7);
    console.log(validMoves)
    return validMoves;
}

function KnightMoves(start, end) {
    getValidMoves([7,7]);
}

KnightMoves([0,0],[1,2]);