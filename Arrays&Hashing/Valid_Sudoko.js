function isValidSudoku(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (
                isDigit(board[i][j]) &&
                !isValidNum(i, j, board, board[i][j]-'0')
            ) {
                return false;
            }
        }
    }
    return true;
}

function isValidNum(row, col, board, num) {
    if (
        isValidRow(row, col, board, num) &&
        isValidCol(row, col, board, num) &&
        isValidGrid(row, col, num, board)
    ) {
        return true;
    }
    return false;
}

function isValidRow(row, col, board, num) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] - "0" === num && i !== col) {
            return false;
        }
    }
    return true;
}

function isValidCol(row, col, board, num) {
    for (let i = 0; i < 9; i++) {
        if (board[i][col]-'0' === num && i !== row) {
            return false;
        }
    }
    return true;
}

function isValidGrid(row, col, num, board) {
    let initialRow = 3 * Math.floor(row / 3);
    let initialCol = 3 * Math.floor(col / 3);
    for (let i = initialRow; i < initialRow + 3; i++) {
        for (let j = initialCol; j < initialCol + 3; j++) {
            if (parseInt(board[i][j], 10) === num && (i !== row || j !== col)) {
                return false;
            }
        }
    }
    return true;
}

function isDigit(ch) {
    if (ch-'0' >= 1 && ch-'0' <= 9) {
        return true;
    }
    return false;
}

const board1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const board2 = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board1)); // Output: true
console.log(isValidSudoku(board2)); // Output: false
