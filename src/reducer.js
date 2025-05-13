const initialState = {
	field: Array(9).fill(' '),
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_ON_CLICK_CELL': {
			const newField = [...state.field];
			newField[payload] = state.currentPlayer;

			return {
				...state,
				currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
				field: newField,
			};
		}
		case 'SET_RESTART_GAME': {
			return {
				field: Array(9).fill(' '),
				currentPlayer: 'X',
				isGameEnded: false,
				isDraw: false,
			};
		}
		case 'SET_IS_DRAW': {
			return {
				...state,
				isDraw: true,
			};
		}
		case 'SET_IS_GAME_ENDED': {
			return {
				...state,
				isGameEnded: true,
				currentPlayer: payload,
			};
		}
		default:
			return state;
	}
};
