const gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
    const markCell = (index, mark) => {
        let result;
        if (board[index] === "") {
            board[index] = mark;
            result = true;
        } else {
            result = false;
        }
        return result;
    };
    const getBoard = () => board;
    return {markCell, getBoard};
})();

const player = (marker) => {
    return {marker};
};

const controller = (() => {
    let combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let active = true;

    const gameOver = (board) => {
        for (let i = 0; i < combinations.length; i++) {
            if ((board[combinations[i][0]] === "X" && board[combinations[i][1]] === "X" && board[combinations[i][2]] === "X") || (board[combinations[i][0]] === "O" && board[combinations[i][1]] === "O" && board[combinations[i][2]] === "O")) {
                active = false;
                return true;
            };
        };
        active = true;
        return false;
    };

    const gameActive = () => active;

    const tie = (board) => {
        for (let i = 0; i < board.length; i++) {
            if (board[i] === "") {
                return false;
            }
        };
        return true;
    };

    const endGame = (state) => {
        active = state;
    };
    return {gameOver, gameActive, tie, endGame};
})();

const turn = (() => {
    const player1 = player("X");
    const player2 = player("O");
    let jugador = player1;
    const getPlayer = () => jugador;
    const changePlayer = () => {
        if (jugador === player1) {
            jugador = player2;
        } else{
            jugador = player1;
        };
        return jugador;
    };
    return {getPlayer, changePlayer};
})();

function checkGame(pos) {
    const stateActive = controller.gameActive();
    const mark = turn.getPlayer().marker;
    if (stateActive === true) {
        const marked = gameboard.markCell(pos, mark);
        if (marked === true) {
            let result = controller.gameOver(gameboard.getBoard());
            const empate = controller.tie(gameboard.getBoard());
            if (empate === true) {
                controller.endGame(false);
                console.log("EMPATE");
            };
            let turnPlayer = turn.changePlayer(); //cambio de jugador
            console.log(result);
            console.log(gameboard.getBoard())
        } else {
            console.log("Celda ya utilizada, busca otra");
        };
    } else {
        console.log("GAME OVER");
    };
};

checkGame(0);
checkGame(1);
checkGame(2);
checkGame(3);
checkGame(4);
checkGame(5);
checkGame(6); //aquí acaba el juego, las dos líneas siguientes ya no rellenan el tablero
checkGame(7);
checkGame(8);
checkGame(9);