import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css'

function calculateWinner(squares) {
	const winLines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	for (let i = 0; i < winLines.length; i++) {
		const [a, b, c] = winLines[i];
		if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
			return (squares[a])
		}
	}
	return (null)
}

// class Square extends React.Component {
// 	render() {
// 	  return (
// 	  	<button 
// 	    		className="square" 
// 			onClick={() => this.props.onClick()}
// 		>
// 			{this.props.value}
// 	    	</button>
// 	  );
// 	}
// }

function Square(props) {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	)
}
      
class Board extends React.Component {

	renderSquare(i) {
	  	return (
			<Square 
	  			value={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
			/>
		)
	}
      
	render() {
		return (
		<div>
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

	constructor (props) {
		super(props)
		this.state = {
			history : [{squares : Array(9).fill(null)}],
			xIsNext : true,
			setpNumber : 0,
		}
	}

	jumpTo(step) {
		this.setState({
			setpNumber: step,
			xIsNext: (step % 2) === 0,
		})
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.setpNumber + 1)
		const current = history[history.length - 1]
		const squares = current.squares.slice()
		if (squares[i] === null && calculateWinner(squares) === null) {
			squares[i] = this.state.xIsNext ? 'X' : 'O'
			this.setState({
				history : history.concat([{squares: squares,}]), 
				xIsNext : !this.state.xIsNext,
				setpNumber : history.length
			})
		}
	}

	render() {
		const history = this.state.history
		const current = history[this.state.setpNumber]
		const winner = calculateWinner(current.squares)

		const moves = history.map((step, move) => {
			const desc = move ? 'Revenir au tour ' + move : "Revenir au debut de la partie"
			return (
				<li key={move}>
					<button onClick={() => this.jumpTo(move)}>{desc}</button>
				</li>
			)
		})

		let status

		if (winner) {
			status = `Winner is ${winner}`
		}
		else {
			status = `Prochain joueur : ${this.state.xIsNext ? 'X' : 'O'}`
		}

		return (
		<div className="game">
		<div className="game-board">
			<Board 
				squares={current.squares}
				onClick={(i) => this.handleClick(i)}
			/>
		</div>
		<div className="game-info">
			<div>{status}</div>
			<ol>{moves}</ol>
		</div>
		</div>
		);
		}
}
      
// ========================================
      
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
      