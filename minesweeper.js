const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [];

    for (i = 1; i < numberOfRows.length; i++) {
        var row = [];

        for (j = 1;  j < numberOfColumns.length; j++) {
            row.push(' ');
        }

        board.push(row);
    } 

    return board;
};

generatePlayerBoard(2,3);

console.log(board);