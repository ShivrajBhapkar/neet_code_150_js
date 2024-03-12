function SearchWord(board, str) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === str[0]) {
                if (DFS(i, j, str, 0)) {
                    return true;
                }
            }
        }
    }
    function DFS(row, col, str, match) {
        if (match === str.length) {
            return true;
        }
        if (
            row < 0 ||
            row >= board.length ||
            col < 0 ||
            col >= board[0].length
        ) {
            return false;
        }
        if (str[match] !== board[row][col]) {
            return false;
        }
        let temp = board[row][col];
        board[row][col] = "#";
        let isPossible =
            DFS(row + 1, col, str, match + 1) ||
            DFS(row - 1, col, str, match + 1) ||
            DFS(row, col + 1, str, match + 1) ||
            DFS(row, col - 1, str, match + 1);
        board[row][col] = temp;
        return isPossible;
    }
    return false;
}
const result1 = SearchWord(
    [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
    ],
    "ABCCED"
);
console.log(result1);
const result = SearchWord(
    [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
    ],
    "ABCB"
);
console.log(result);
