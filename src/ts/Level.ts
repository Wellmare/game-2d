import { Cell } from './Cell';
import { Controls } from './Controls';
import { finishModal, finishModalNode } from './index';

import { FinishModalSelectors, ICoords, Selectors } from './types';

const gameNode = document.querySelector(Selectors.GAME)!;

export default class Level {
	private readonly gameCells: Array<Array<Cell>> = [];
	private readonly currentCoords: ICoords;
	private isFinished = false;
	private controls!: Controls;

	constructor(
		private readonly rows: number,
		private readonly cells: number,
		private readonly finishCoords: ICoords,
		private readonly spawnCoords: ICoords,
		private readonly onSubmit: (instance: Level) => void,
		public levelNumber: number,
		private readonly onRetry: (instance: Level) => void
	) {
		this.currentCoords = spawnCoords;
		this.init();
		
	}

	init = (): void => {
		this.createField();
		document.querySelector(Selectors.CURRENT_LEVEL_SPAN)!.textContent =
			this.levelNumber.toString();

		this.controls = new Controls(
			this.rows,
			this.cells,
			this.currentCoords,
			this.render
		);
	};

	createField = (): void => {
		for (let row = 0; row < this.rows; row++) {
			const rowEl = document.createElement('div');

			rowEl.className = 'game-row';
			const rowCells: Array<Cell> = [];

			for (let cell = 0; cell < this.cells; cell++) {
				const cellInstanse = new Cell(
					{ y: row, x: cell },
					this.currentCoords,
					this.finishCoords
				);

				rowCells.push(cellInstanse);
				rowEl.appendChild(cellInstanse.render());
			}
			this.gameCells.push(rowCells);
			gameNode.appendChild(rowEl);
		}
	};

	render = (): void => {
		this.gameCells.forEach((row) => {
			row.forEach((cell) => {
				cell.render();
			});
		});
		if (
			this.currentCoords.y === this.finishCoords.y &&
			this.currentCoords.x === this.finishCoords.x
		) {
			if (!this.isFinished) {
				this.finish();
			}
		}
	};

	finish = (): void => {
		finishModalNode.querySelector(
			FinishModalSelectors.LEVEL_SPAN
		)!.textContent = this.levelNumber.toString();

		finishModalNode
			.querySelector(FinishModalSelectors.SUBMIT_BTN)!
			.addEventListener(`click`, () => {
				finishModal.hide();
				this.destroyLevel();
				this.onSubmit(this);
			});

		finishModalNode
			.querySelector(FinishModalSelectors.RETRY_BTN)!
			.addEventListener(`click`, () => {
				finishModal.hide();
				this.destroyLevel();
				this.onRetry(this);
			});

		this.isFinished = true;
		finishModal.show();
	};

	destroyLevel = (): void => {
		gameNode.innerHTML = ``;
		this.controls.disableControls();
	};
}
