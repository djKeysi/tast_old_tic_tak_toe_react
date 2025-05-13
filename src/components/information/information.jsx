import { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
});

export class InformationContainer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<>
				{!this.props.isDraw && !this.props.isGameEnded && (
					<div>
						<label className="text-center">{`Ходит игрок: ${this.props.currentPlayer}`}</label>
					</div>
				)}

				{this.props.isGameEnded && !this.props.isDraw && (
					<div>
						<label className="text-center font-bold text-red-500">{`Победил игрок: ${this.props.currentPlayer}`}</label>
					</div>
				)}
				{this.props.isDraw && (
					<div>
						{' '}
						<label className="text-center font-bold text-blue-500">
							{'Ничья'}
						</label>
					</div>
				)}
			</>
		);
	}
}

export const Information = connect(mapStateToProps)(InformationContainer);
