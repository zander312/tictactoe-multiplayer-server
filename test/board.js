var assert = require('assert')
var Board = require('../models/board.js').Board;

describe('board methods', function() {
	var board = new Board;

	var mockFalseBoards = [
		[
			['x', 'o', 'x'],
			['o', 'x', 'x'],
			['0', 'o', 'o']
		],
		[
			['o', 'x', 'o'],
			['o', '0', 'o'],
			['0', 'x', 'x']
		],
		[
			['x', '0', 'x'],
			['o', 'x', '0'],
			['o', '0', '0']
		],
		[
			['o', 'o', 'x'],
			['o', 'x', 'o'],
			['0', 'o', 'x']
		],
		[
			['x', 'o', 'x'],
			['0', 'o', '0'],
			['0', 'x', '0']
		],
		[
			['0', '0', '0'],
			['0', '0', '0'],
			['0', '0', '0']
		],
		[
			['o', 'x', 'x'],
			['x', '0', 'x'],
			['o', 'x', 'o']
		],
		[
			['o', 'o', 'x'],
			['x', 'o', 'o'],
			['o', 'x', 'x']
		]
	];

	var mockTrueBoardsX = [
		[
			['x', '0', '0'],
			['0', 'x', '0'],
			['0', '0', 'x']
		],
		[
			['o', 'x', 'o'],
			['o', 'x', 'o'],
			['0', 'x', 'x']
		],
		[
			['x', '0', 'x'],
			['o', 'x', '0'],
			['x', '0', '0']
		],
		[
			['o', 'o', 'x'],
			['x', 'x', 'x'],
			['0', 'o', 'x']
		],
		[
			['x', 'o', 'x'],
			['0', 'x', '0'],
			['0', 'x', 'x']
		],
		[
			['0', '0', 'x'],
			['0', '0', 'x'],
			['0', '0', 'x']
		],
		[
			['o', 'x', 'x'],
			['x', '0', '0'],
			['x', 'x', 'x']
		],
		[
			['x', 'x', 'x'],
			['x', 'o', 'o'],
			['o', 'x', 'x']
		]
	];

	var mockTrueBoardsO = [
		[
			['o', 'o', 'o'],
			['0', 'x', '0'],
			['0', '0', 'x']
		],
		[
			['o', 'x', 'o'],
			['o', 'o', 'o'],
			['0', 'x', 'x']
		],
		[
			['o', '0', 'x'],
			['o', 'o', '0'],
			['x', '0', 'o']
		],
		[
			['o', '0', 'o'],
			['x', 'o', 'x'],
			['o', 'o', 'x']
		],
		[
			['x', 'o', 'x'],
			['0', 'x', '0'],
			['o', 'o', 'o']
		],
		[
			['0', '0', 'o'],
			['0', '0', 'o'],
			['0', '0', 'o']
		],
		[
			['o', 'o', 'x'],
			['x', 'o', '0'],
			['x', 'o', 'x']
		],
		[
			['o', 'x', 'x'],
			['o', '0', 'o'],
			['o', 'x', 'x']
		]
	];

	describe('checkRows', function() {
		it('should return x when first row is all x', function() {
			var mockBoard = [
				['x', 'x', 'x'],
				['0', '0', '0'],
				['0', '0', '0']
			];
			board.setBoard(mockBoard)
			assert.equal(board.checkRows(), 'x');
		}),
		it('should retrun x when second row is all x', function() {
			var mockBoard = [
				['0', '0', '0'],
				['x', 'x', 'x'],
				['0', '0', '0']
			];
			board.setBoard(mockBoard)
			assert.equal(board.checkRows(), 'x');
		}),
		it('should return x when third row is all x', function() {
			var mockBoard = [
				['0', '0', '0'],
				['0', '0', '0'],
				['x', 'x', 'x']
			];
			board.setBoard(mockBoard)
			assert.equal(board.checkRows(), 'x');
		}),
		it('should return o when first row is all o', function() {
			var mockBoard = [
				['o', 'o', 'o'],
				['0', '0', '0'],
				['0', '0', '0']
			];
			board.setBoard(mockBoard)
			assert.equal(board.checkRows(), 'o');
		}),
		it('should return o when second row is all o', function() {
			var mockBoard = [
				['0', '0', '0'],
				['o', 'o', 'o'],
				['0', '0', '0']
			];
			board.setBoard(mockBoard)
			assert.equal(board.checkRows(), 'o');
		}),
		it('should return o when third row is all o', function() {
			var mockBoard = [
				['0', '0', '0'],
				['0', '0', '0'],
				['o', 'o', 'o']
			];
			board.setBoard(mockBoard)
			assert.equal(board.checkRows(), 'o');
		}),
		mockFalseBoards.forEach(function(mockBoard) {
			it('should return undefined when tested against false board combination ' + mockBoard, function() {
				board.setBoard(mockBoard)
				assert.equal(board.checkRows(), undefined);
			})
		});
	});

	describe('checkCols', function() {
		it('should return x when first col is all x', function() {
			var mockBoard = [
				['x', '0', '0'],
				['x', '0', '0'],
				['x', '0', '0']
			];
			board.setBoard(mockBoard)
			assert.equal(board.checkCols(), 'x');
		}),
		it('should retrun x when second col is all x', function() {
			var mockBoard = [
				['0', 'x', '0'],
				['0', 'x', '0'],
				['0', 'x', '0']
			];
			board.setBoard(mockBoard)
			assert.equal(board.checkCols(), 'x');
		}),
		it('should retrun x when third col is all x', function() {
			var mockBoard = [
				['0', '0', 'x'],
				['0', '0', 'x'],
				['0', '0', 'x']
			];
			board.setBoard(mockBoard)
			assert.equal(board.checkCols(), 'x');
		}),
		it('should return o when first col is all o', function() {
			var mockBoard = [
				['o', '0', '0'],
				['o', '0', '0'],
				['o', '0', '0']
			];
			board.setBoard(mockBoard)
			assert.equal(board.checkCols(), 'o');
		}),
		it('should retrun o when second col is all o', function() {
			var mockBoard = [
				['0', 'o', '0'],
				['0', 'o', '0'],
				['0', 'o', '0']
			];
			board.setBoard(mockBoard)
			assert.equal(board.checkCols(), 'o');
		}),
		it('should retrun o when third col is all o', function() {
			var mockBoard = [
				['0', '0', 'o'],
				['0', '0', 'o'],
				['0', '0', 'o']
			];
			board.setBoard(mockBoard)
			assert.equal(board.checkCols(), 'o');
		}),
		mockFalseBoards.forEach(function(mockBoard) {
			it('should return false when tested against false board combination ' + mockBoard, function() {
				board.setBoard(mockBoard)
				assert.equal(board.checkCols(), undefined);
			})
		});
	});

	describe('checkDiag', function() {
		it('should return true when x are backwards diagonal', function() {
			var mockBoard = [
				['x', '0', '0'],
				['0', 'x', '0'],
				['0', '0', 'x']
			];
			board.setBoard(mockBoard)
			assert.equal(board.checkDiag(), 'x');
		}),
		it('should retrun true when x are forward diagonal', function() {
			var mockBoard = [
				['0', '0', 'x'],
				['0', 'x', '0'],
				['x', '0', '0']
			];
			board.setBoard(mockBoard)
			assert.equal(board.checkDiag(), 'x');
		}),
		it('should return true when o are backwards diagonal', function() {
			var mockBoard = [
				['o', '0', '0'],
				['0', 'o', '0'],
				['0', '0', 'o']
			];
			board.setBoard(mockBoard)
			assert.equal(board.checkDiag(), 'o');
		}),
		it('should retrun true when o are forward diagonal', function() {
			var mockBoard = [
				['0', '0', 'o'],
				['0', 'o', '0'],
				['o', '0', '0']
			];
			board.setBoard(mockBoard)
			assert.equal(board.checkDiag(), 'o');
		}),
		mockFalseBoards.forEach(function(mockBoard) {
			it('should return false when tested against false board combination ' + mockBoard, function() {
				board.setBoard(mockBoard)
				assert.equal(board.checkDiag(), undefined);
			})
		});
	});

	describe('checkWin', function() {
		it('should return x when array is all x', function() {
			var arr = ['x','x','x'];
			assert.equal(board.checkWin(arr), 'x');
		}),
		it('should retrun o when array is all o', function() {
			var arr = ['o','o','o'];
			assert.equal(board.checkWin(arr), 'o');
		}),
		it('should retrun false when array is not all x or all o', function() {
			var arr = ['o','x','0'];
			assert.equal(board.checkWin(arr), false);
		})
	});

	describe('checkBoard', function() {
		mockFalseBoards.forEach(function(mockBoard) {
			it('should return false when tested against false board combination ' + mockBoard, function() {
				board.setBoard(mockBoard)
				assert.equal(board.checkBoard(), false);
			})
		});
		mockTrueBoardsX.forEach(function(mockBoard) {
			it('should return x when tested against boards with true x combinations ' + mockBoard, function() {
				board.setBoard(mockBoard)
				assert.equal(board.checkBoard(), 'x');
			})
		});
		mockTrueBoardsO.forEach(function(mockBoard) {
			it('should return o when tested against boards with true o combinations ' + mockBoard, function() {
				board.setBoard(mockBoard)
				assert.equal(board.checkBoard(mockBoard), 'o');
			})
		});
	});

});


