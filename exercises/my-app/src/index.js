import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/**
 * To collect data from multiple children, or to have two child components communicate with each other,
 * you need to declare the shared state in their parent component instead.
 * The parent component can pass the state back down to the children by using props;
 * this keeps the child components in sync with each other and with the parent component.
 */

/**
  * 
  * To “remember” things, components use state.
    constructor(props) {
      console.log("props1 => ", props);
      super(props);
      this.state = { value: null };
    }
  The render method returns a description of what you want to see on the screen.
  functional component we don’t need to worry about this.} props 
  */
function Square(props) {
//   console.log("this is props.value => ", props.value);
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  // Lifting state into a parent component is common when React components are refactored
  constructor(props) {
    super(props);
    this.state = {
      // These 9 nulls correspond to the 9 squares:
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    console.log("this is squares => ", this.state.squares.slice());
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }

  renderSquare(i) {
    // console.log("this is I ", i);
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => {
          this.handleClick(i);
          console.log("onClick from <Board />");
        }}
      />
    );
  }
  //   The render method returns a description of what you want to see on the screen.
  render() {
    // const status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
      console.log("squares[a]", squares[a]);
    }
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
