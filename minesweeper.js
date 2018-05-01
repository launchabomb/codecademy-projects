const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [];

    for (let i = 1; i < numberOfRows.length; i++) {
        var row = [];

        for (let j = 1;  j < numberOfColumns.length; j++) {
            row.push(' ');
        }

        board.push(row);
    } 

    return board;
};

generatePlayerBoard(2,3);

console.log(board);
