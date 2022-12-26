import { Cell } from './Cell';
import { Controls } from './Controls';
import { finishModal } from './Game';

import {
	CellRole,
	Field,
	FinishModalSelectors,
	ICoords,
	ISetLevelProps,
	Selectors
} from './types';

const currentLevelSpan = document.querySelector<HTMLSpanElement>(
	Selectors.CURRENT_LEVEL_SPAN
);
const finishModalLevelSpan = document.querySelector<HTMLSpanElement>(
	FinishModalSelectors.LEVEL_SPAN
);
export const gameNode = document.querySelector(Selectors.GAME)!;

export let levelName: string;
export let isFinished = false;

export const gameCells: Cell[][] = [];

export let playerCoords: ICoords = { x: 0, y: 0 };
export let field: Field;

export let controls: Controls;
export let onSubmit: () => void;

export const setLevel = (props: ISetLevelProps): void => {
	levelName = props.levelName;
	field = props.field;
	onSubmit = props.onSubmit;
	playerCoords = props.playerCoords;

	init();
};

export const init = (): void => {
	gameNode.innerHTML = '';
	isFinished = false;

	createField();
	if (currentLevelSpan !== null) {
		currentLevelSpan.textContent = levelName;
	}

	controls = new Controls(playerCoords, renderLevel, field);
};

export const createField = (): void => {
	for (let row = 0; row < field.length; row++) {
		const rowEl = document.createElement('div');

		rowEl.className = 'game-row';
		const rowCells: Cell[] = [];

		for (let cell = 0; cell < field[row].length; cell++) {
			const cellInstanse = new Cell(
				{ y: row, x: cell },
				playerCoords,
				field[row][cell].role
			);

			rowCells.push(cellInstanse);
			rowEl.appendChild(cellInstanse.render());
		}
		gameCells.push(rowCells);
		gameNode.appendChild(rowEl);
	}
};

export const renderLevel = (): void => {
	gameCells.forEach((row) => {
		row.forEach((cell) => {
			cell.render();
		});
	});
	if (
		Cell.getCellTypeByCoords(playerCoords.y, playerCoords.x, field) ===
		CellRole.FINISH
	) {
		if (isFinished) {
			finish();
		}
	}
};

export const finish = (): void => {
	if (finishModalLevelSpan !== null) {
		finishModalLevelSpan.textContent = levelName;
	}

	isFinished = true;
	finishModal.show();
};

export const destroyLevel = (): void => {
	gameNode.innerHTML = '';
	controls.disableControls();
};
