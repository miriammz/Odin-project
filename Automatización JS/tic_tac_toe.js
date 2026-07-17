const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
    const markCell = (index, mark) => {
        if (board[index] === "") {
            board[index] = mark;
        } else {
            console.log("Celda ya utilizada");
        }
    };
    const getGameboard = () => board;
    return {markCell, getGameboard};
})();

Gameboard.markCell(0, "X");
Gameboard.getGameboard();



//comprobar game over, buscar líneas de 3 X ó O