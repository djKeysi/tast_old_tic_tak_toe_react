import { Field, GameRestart, Information } from './components';

import './index.css';

export const Game = () => {
	return (
		<div className="parent">
			<div className="block">
				<h3 className="text-center">Игра крестики - нолики</h3>
				<div className="grid">
					<Field />
					<Information />
					<GameRestart />
				</div>
			</div>
		</div>
	);
};
