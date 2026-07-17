const Gameboard = (() => {
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
    const getGameboard = () => board;
    return {markCell, getGameboard};
})();

const marked = Gameboard.markCell(0, "X");
if (marked === true) {
    Gameboard.getGameboard();
} else {
    console.log("Celda ya utilizada, busca otra");
}





//comprobar game over, buscar líneas de 3 X ó O