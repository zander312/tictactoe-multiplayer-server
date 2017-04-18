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
        player: null,
        winner: null
      }
    }

  componentDidMount() {
    socket.emit('fetchData')
    socket.on('player', (data) => {this._setPlayer(data)})
    socket.on('board', (data) => {this._setBoard(data)})
    socket.on('winner', (data) => {this._winner(data)})
  }

  _setPlayer(player){
    this.setState({player: player})
  }

  _setBoard(board){
    this.setState({board : board})
  }

  _winner(winner){
    this.setState({player: null})
    this.setState({winner: winner}, () => {
      setTimeout(()=>{
        this.setState({winner: null})
      }, 1000)
    }) 
  }

  handleClick(rowIndex, elementIndex){
    socket.emit('click', rowIndex, elementIndex)
  }

  _displayPlayer(){
    if(this.state.player){
      return "player " + this.state.player + " make the move."
    } else {
      return "Make the first move!"
    }
  }

  _displayBoard(){
    let rows = this.state.board.map((row, rowIndex) => {
      let elements = row.map((element, elementIndex) => {
        return <td onClick={() => {this.handleClick(rowIndex, elementIndex)} } key={elementIndex}>{element == '0' ? null : element}</td>
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
        <div className={styles.player}>{this._displayPlayer()}</div>
        <div className={styles.winner}>{this.state.winner ? "Player " + this.state.winner + " Won the GAME!" : null}</div>
      </div>
    );
  }
}
