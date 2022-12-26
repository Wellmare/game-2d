import { Modal } from 'bootstrap';

import '../css/index.css';
import { init } from './init';
import Level from './Level';
import { levels } from './levels';
import { EndGameModalSelectors, FinishModalSelectors } from './types';

export const finishModalNode = document.querySelector(
	FinishModalSelectors.MODAL
)!;
export const finishModal = new Modal(FinishModalSelectors.MODAL);
const endGameModal = new Modal(EndGameModalSelectors.MODAL);

let levelIndex = 0;

init();

export function renderCurrentLevel(): void {
	debugger
	const currentLevel = levels[levelIndex];

	if (currentLevel !== undefined) {
		const rows = currentLevel.size.rows;
		const cells = currentLevel.size.cells;
		const spawnCoords = currentLevel.spawnCoords;
		const finishCoords = currentLevel.finishCoords;
		const level = currentLevel.level;

		// new Level(
		// 	rows,
		// 	cells,
		// 	finishCoords,
		// 	spawnCoords,
		// 	nextLevel,
		// 	level,
		// 	retryLevel
		// );
		Level.setLevel(level, rows, cells, finishCoords, spawnCoords, nextLevel)
	} else {
		endGameModal.show();
	}
}

function nextLevel(): void {
	if (Level.levelNumber === levelIndex + 1) {
		levelIndex++;
		renderCurrentLevel();
	}
}
// function retryLevel() {
// 	if (instance.levelNumber === levelIndex + 1) {
// 		// renderCurrentLevel();
// 		instance.retry()
// 	}
// }
