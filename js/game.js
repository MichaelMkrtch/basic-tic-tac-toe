export default class Game {
    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    nextTurn() {
        this.turn = this.turn === "X" ? "O" : "X";
    }

    makeMove(index) {
        // Ends game
        if (!this.isInProgress) {
            return;
        }


        if (this.board[index]) {
            return;
        }

        this.board[index] = this.turn;

        if (!this.findWinningCombination()) {
            this.nextTurn();   
        }
    }

    findWinningCombination() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const combination of winningCombinations) {
            // Array destructuring
            const [a, b, c] = combination;

            // Checks if "a" is not null and if value of each index is the same
            if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                return combination;
            }
        }

        return null;
    }

    isInProgress() {
        // Game is in progress if there is no winning combination and if there are empty spots on board
        return !this.findWinningCombination() && this.board.includes(null);
    }
}
