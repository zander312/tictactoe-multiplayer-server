import React from 'react';
import styles from './SomeComponent.scss';
import io from 'socket.io-client'
let socket = io.connect()

export default class SomeComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        board: [
          ['0', '0', '0'],
          ['0', '0', '0'],
          ['0', '0', '0']
        ],
        player: null
      }
    }

  componentDidMount() {
    socket.emit('fetchData')
    socket.on('player', (data) => {this._setPlayer(data)})
    socket.on('board', (data) => {this._setBoard(data)})
    socket.on('winner', (data) => {this._winner})
  }

  _setPlayer(player){
    this.setState({player: player})
    console.log(this.state.player)
  }

  _setBoard(board){
    this.setState({board : board})
    console.log(board)
  }

  _winner(winner){
    console.log(winner)
  }

  handleClick(rowIndex, elementIndex){
    console.log(rowIndex + " : " + elementIndex)
    socket.emit('click', rowIndex, elementIndex)
  }

  _displayBoard(){
    let rows = this.state.board.map((row, rowIndex) => {
      let elements = row.map((element, elementIndex) => {
        return <td onClick={() => {this.handleClick(rowIndex, elementIndex)} } key={elementIndex}>{element}</td>
      })
      return <tr key={rowIndex}>{elements}</tr>
    })
    return (
      <table className={styles.table}>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <div>
        {this._displayBoard()}
      </div>
    );
  }
}
