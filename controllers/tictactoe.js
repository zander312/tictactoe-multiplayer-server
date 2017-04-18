var Board = require('../models/board.js').Board;


function tictacSocket(io) {
	var board = new Board;
	io.on('connection', function(socket) {
		console.log("a user connected")
		socket.on('disconnect', function() {
			console.log('user disconnected');
		})

		socket.on('fetchData', function(){
			socket.emit('board', board.board)
			socket.emit('player', board.player)
		})


		socket.on('click', function(rowIndex, elementIndex) {
			board.makeMove(rowIndex, elementIndex)
			if(board.checkBoard()){
				io.sockets.emit('winner', board.checkBoard())
				board.clearBoard()
				io.sockets.emit('board', board.board)
			} else {
				io.sockets.emit('player', board.player)
				io.sockets.emit('board', board.board)
			}	
		})
	})
}

module.exports = tictacSocket