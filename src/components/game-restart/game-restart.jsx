import { connect } from 'react-redux';
import { Component } from 'react';
import './game-restart.css';
export class GameRestartContainer extends Component {
	constructor(props) {
		super(props);
		this.onClickRestart = this.onClickRestart.bind(this);
	}
	onClickRestart() {
		this.props.dispatch({ type: 'SET_RESTART_GAME' });
	}

	render() {
		return (
			<>
				<button className="button" onClick={this.onClickRestart}>
					{' '}
					Начать заново
				</button>
			</>
		);
	}
}

export const GameRestart = connect()(GameRestartContainer);
