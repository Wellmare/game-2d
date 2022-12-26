import { Cell } from './Cell';
import { Controls } from './Controls';
import { finishModalNode, finishModal } from './Game';

import {
	CellRole,
	Field,
	FinishModalSelectors,
	ICoords,
	ISetLevelProps,
	Selectors
} from './types';
import { equateCoords } from './utils';

export const gameNode = document.querySelector(Selectors.GAME)!;

export default class Level {
	static readonly gameCells: Array<Array<Cell>> = [];
	static playerCoords: ICoords;

	static isFinished = false;
	static controls: Controls;

	static levelNumber: number;
	// static rows: number;
	// static cells: number;

	// static finishCoords: ICoords;
	// static spawnCoords: ICoords;

	static onSubmit: () => void;
	// static onRetry: () => void;

	static field: Field;

	static setLevel = ({
		levelNumber,
		playerCoords,
		field,
		onSubmit
	}: ISetLevelProps): void => {
		Level.levelNumber = levelNumber;
		Level.playerCoords = playerCoords;
		Level.field = field;
		Level.onSubmit = onSubmit

		this.init();
		console.log(levelNumber);
	};

	static init = (): void => {
		gameNode.innerHTML = ``;
		Level.isFinished = false;

		Level.createField();
		document.querySelector(Selectors.CURRENT_LEVEL_SPAN)!.textContent =
			Level.levelNumber.toString();

		Level.controls = new Controls(
			Level.playerCoords,
			Level.render,
			Level.field
		);
	};

	static createField = (): void => {
		for (let row = 0; row < Level.field.length; row++) {
			const rowEl = document.createElement('div');

			rowEl.className = 'game-row';
			const rowCells: Array<Cell> = [];

			for (let cell = 0; cell < Level.field[row].length; cell++) {
				const cellInstanse = new Cell(
					{ y: row, x: cell },
					this.playerCoords,
					Level.field[row][cell].role
				);

				rowCells.push(cellInstanse);
				rowEl.appendChild(cellInstanse.render());
			}
			Level.gameCells.push(rowCells);
			gameNode.appendChild(rowEl);
		}
	};

	static render = (): void => {
		Level.gameCells.forEach((row) => {
			row.forEach((cell) => {
				cell.render();
			});
		});
		if (
			Cell.getCellTypeByCoords(
				this.playerCoords.y,
				this.playerCoords.x,
				this.field
			) === CellRole.FINISH
		) {
			if (!Level.isFinished) {
				Level.finish();
			}
		}
	};

	static finish = (): void => {
		finishModalNode.querySelector(
			FinishModalSelectors.LEVEL_SPAN
		)!.textContent = Level.levelNumber.toString();

		Level.isFinished = true;
		finishModal.show();
	};

	static destroyLevel = (): void => {
		gameNode.innerHTML = ``;
		Level.controls.disableControls();
	};
}
