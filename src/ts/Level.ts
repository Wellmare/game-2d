import { Cell } from './Cell';
import { Controls } from './Controls';
import { finishModal, finishModalNode } from './index';

import { FinishModalSelectors, ICoords, Selectors } from './types';
import { equateCoords } from './utils';

export const gameNode = document.querySelector(Selectors.GAME)!;

export default class Level {
	static readonly gameCells: Array<Array<Cell>> = [];
	static currentCoords: ICoords;

	static isFinished = false;
	static controls: Controls;

	static levelNumber: number;
	static rows: number;
	static cells: number;

	static finishCoords: ICoords;
	static spawnCoords: ICoords;

	static onSubmit: () => void;
	static onRetry: () => void;

	// constructor(
	// 	private readonly rows: number,
	// 	private readonly cells: number,
	// 	private readonly finishCoords: ICoords,
	// 	private readonly spawnCoords: ICoords,
	// 	private readonly onSubmit: (instance: Level) => void,
	// 	public levelNumber: number,
	// 	private readonly onRetry: (instance: Level) => void
	// ) {
	// this.currentCoords.x = this.spawnCoords.x;
	// this.currentCoords.y = this.spawnCoords.y;
	// this.currentCoords = Object.assign({}, this.spawnCoords)
	// this.init();
	// }

	static setLevel = (
		levelNumber: number,
		rows: number,
		cells: number,
		finishCoords: ICoords,
		spawnCoords: ICoords,
		onSubmit: () => void
		// onRetry: () => {}
	): void => {
		Level.levelNumber = levelNumber;
		Level.rows = rows;
		Level.cells = cells;
		Level.finishCoords = finishCoords;
		Level.spawnCoords = spawnCoords;
		Level.onSubmit = onSubmit;
		Level.currentCoords = Object.assign({}, spawnCoords);
		// Level.onRetry = onRetry;

		this.init();
	};

	static init = (): void => {
		gameNode.innerHTML = ``;
		Level.isFinished = false;

		Level.createField();
		document.querySelector(Selectors.CURRENT_LEVEL_SPAN)!.textContent =
			Level.levelNumber.toString();

		Level.controls = new Controls(
			Level.rows,
			Level.cells,
			Level.currentCoords,
			Level.render
		);
	};

	static createField = (): void => {
		for (let row = 0; row < Level.rows; row++) {
			const rowEl = document.createElement('div');

			rowEl.className = 'game-row';
			const rowCells: Array<Cell> = [];

			for (let cell = 0; cell < Level.cells; cell++) {
				const cellInstanse = new Cell(
					{ y: row, x: cell },
					Level.currentCoords,
					Level.finishCoords
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
		if (equateCoords(Level.currentCoords, Level.finishCoords)) {
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

	// retry = () => {
	// 	// this.render()
	// 	this.destroyLevel()
	// 	this.isFinished = false
	// 	this.init()
	// 	this.currentCoords.x = this.spawnCoords.x
	// 	this.currentCoords.y = this.spawnCoords.y
	// 	this.render()
	// }
}
