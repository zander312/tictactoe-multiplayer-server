"use strict";

class Board {
	constructor() {
		this.board = [
			['0', '0', '0'],
			['0', '0', '0'],
			['0', '0', '0']
		]
		this.player = 'x'
	}

	setBoard(board){
		this.board = board;
	}

	clearBoard(){
		this.board = [
			['0', '0', '0'],
			['0', '0', '0'],
			['0', '0', '0']
		]
	}

	makeMove(rowIndex, elementIndex){
		if(this.board[rowIndex][elementIndex] == '0'){
			this.board[rowIndex][elementIndex] = this.player
			this.togglePlayer()
		}
	}

	togglePlayer(){
		if(this.player == 'x'){
			this.player = 'o';
		} else if(this.player == 'o'){
			this.player = 'x';
		}
	}

	checkBoard() {
		if (this.checkRows(this.board)) {
			return this.checkRows(this.board)
		} else if (this.checkCols(this.board)) {
			return this.checkCols(this.board)
		} else if (this.checkDiag(this.board)) {
			return this.checkDiag(this.board)
		} else {
			return false
		}
	}

	checkWin(arr) {
		if (arr[0] == 'x' && arr[1] == 'x' && arr[2] == 'x') {
			return 'x'
		} else if (arr[0] == 'o' && arr[1] == 'o' && arr[2] == 'o') {
			return 'o'
		} else {
			return false
		}
	}

	checkRows() {
		for (var rowIndex = 0; rowIndex < this.board.length; rowIndex++) {
			var winner = this.checkWin(this.board[rowIndex])
			if (winner) {
				return winner
			}
		}
	}

	checkCols() {
		for (var colIndex = 0; colIndex < this.board[0].length; colIndex++) {
			var col = [];
			for (var rowIndex = 0; rowIndex < this.board.length; rowIndex++) {
				var colElement = this.board[rowIndex][colIndex];
				col.push(colElement)
			}
			var winner = this.checkWin(col)
			if (winner) {
				return winner
			}
		}
	}

	checkDiag() {
		var backDiagIndex = 0;
		var forwardDiagIndex = this.board[0].length - 1;

		var backDiagArr = [];
		var forwardDiagArr = [];

		for (var rowIndex = 0; rowIndex < this.board.length; rowIndex++) {
			var backDiagElement = this.board[rowIndex][backDiagIndex];
			backDiagArr.push(backDiagElement)
			var forwardDiagElement = this.board[rowIndex][forwardDiagIndex]
			forwardDiagArr.push(forwardDiagElement)

			backDiagIndex++
			forwardDiagIndex--
		}
		var winner = this.checkWin(backDiagArr) || this.checkWin(forwardDiagArr)
		if (winner) {
			return winner
		}
	}
}

// var board = new Board()
// console.log(board.board)
// console.log(board.player)
// board.makeMove(0,0)
// console.log(board.checkBoard())
// console.log(board.board)
// console.log(board.player)
// console.log("__________")
// board.makeMove(0,1)
// console.log(board.checkBoard())
// console.log(board.board)
// console.log(board.player)
// console.log("__________")
// board.makeMove(1,0)
// console.log(board.checkBoard())
// console.log(board.board)
// console.log(board.player)
// console.log("__________")
// board.makeMove(1,1)
// console.log(board.checkBoard())
// console.log(board.board)
// console.log(board.player)
// console.log("__________")
// board.makeMove(2,0)
// console.log(board.checkBoard())
// console.log(board.board)
// console.log(board.player)
// console.log("__________")






module.exports.Board = Board;









