import { areArraysEqual, playerArray, WIN_PATTERNS } from '../../utils/utils';
import { connect } from 'react-redux';
import './field.css';
import { Component } from 'react';

const mapStateToProps = (state) => ({
	field: state.field,
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
});

export class FieldContainer extends Component {
	constructor(props) {
		super(props);
		this.onClickCell = this.onClickCell.bind(this);
	}

	onClickCell(index) {
		const newField = [...this.props.field];
		newField[index] = this.props.currentPlayer;

		this.props.dispatch({ type: 'SET_ON_CLICK_CELL', payload: index });

		WIN_PATTERNS.forEach((cellIndex) => {
			if (areArraysEqual(playerArray('X', newField), cellIndex)) {
				this.props.dispatch({ type: 'SET_IS_GAME_ENDED', payload: 'X' });
			} else if (areArraysEqual(playerArray('O', newField), cellIndex)) {
				this.props.dispatch({ type: 'SET_IS_GAME_ENDED', payload: 'O' });
			}
			if (
				(playerArray('O', newField).length === 4 &&
					playerArray('X', newField).length === 5) ||
				(playerArray('O', newField).length === 5 &&
					playerArray('X', newField).length === 4)
			) {
				this.props.dispatch({ type: 'SET_IS_DRAW' });
			}
		});
	}
	render() {
		return (
			<>
				{this.props.field.map((num, index) => {
					return (
						<div
							onClick={this.onClickCell.bind(null, index)}
							className={
								num === ' ' && !this.props.isGameEnded
									? 'cell' //"flex-9/12 h-0.5 mb-1 bg-amber-500 font-bold cursor-crosshair" //styles.cell
									: 'cell' + ' ' + 'pointer-events-none'
							}
							key={index}
						>
							{num}
						</div>
					);
				})}
			</>
		);
	}
}

export const Field = connect(mapStateToProps)(FieldContainer);
