import { Modal } from 'bootstrap';

import '../css/index.css';
import Level from './Level';
import { levels } from './levels';
import { EndGameModalSelectors, FinishModalSelectors } from './types';

export const finishModalNode = document.querySelector(FinishModalSelectors.MODAL)!;
export const finishModal = new Modal(FinishModalSelectors.MODAL);
const endGameModal = new Modal(EndGameModalSelectors.MODAL);

let levelIndex = 0;

renderCurrentLevel();

function renderCurrentLevel(): void {
	const currentLevel = levels[levelIndex];

	if (currentLevel !== undefined) {
		const rows = currentLevel.size.rows;
		const cells = currentLevel.size.cells;
		const spawnCoords = currentLevel.spawnCoords;
		const finishCoords = currentLevel.finishCoords;

		new Level(
			rows,
			cells,
			finishCoords,
			spawnCoords,
			nextLevel,
			currentLevel.level
		);
	} else {
		endGameModal.show();
	}
}

function nextLevel(instance: Level): void {
	if (instance.levelNumber === levelIndex + 1) {
		levelIndex++;
		renderCurrentLevel();
	}
}
