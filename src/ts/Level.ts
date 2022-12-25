import { finishModal, modalNode } from './index';
import { ICoords } from './types';

const gameNode = document.querySelector('#game')!;

export default class Level {
	private gameCells: NodeListOf<HTMLDivElement>[] = [];
	private currentCoords: ICoords;
	private isFinished = false;

	constructor(
		private rows: number,
		private cells: number,
		private finishCoords: ICoords,
		private spawnCoords: ICoords,
		private onSubmit: (instance: Level) => void,
		public levelNumber: number
	) {
		this.currentCoords = spawnCoords;
		this.createField();
		this.init();
	}

	createField = async () => {
		for (let row = 0; row < this.rows; row++) {
			// row
			const rowEl = document.createElement('div');
			rowEl.className = 'game-row';

			for (let cell = 0; cell < this.cells; cell++) {
				// cell
				const cellEl = document.createElement('div');
				cellEl.classList.add('game-cell');
				if (
					this.finishCoords.y === row &&
					this.finishCoords.x === cell
				) {
					cellEl.classList.add('finish');
				}
				if (this.spawnCoords.y === row && this.spawnCoords.x === cell) {
					cellEl.classList.add('player');
				}
				// rowEl.insertAdjacentElement('afterend', cellEl);
				rowEl.innerHTML += cellEl.outerHTML;
			}
			gameNode.insertAdjacentElement('beforeend', rowEl);
		}
	};
	init = () => {
		document.querySelectorAll('.game-row').forEach((row) => {
			this.gameCells.push(row.querySelectorAll('.game-cell'));
		});

		document.querySelector('#current-level')!.textContent =
			this.levelNumber.toString();

		document.addEventListener(`keydown`, this.onKeyDown);
	};

	onKeyDown = (e: KeyboardEvent) => {
		const MAX_ROW_INDEX = this.rows - 1;
		const MAX_CELL_INDEX = this.cells - 1;

		if (this.isFinished) return;

		switch (e.key) {
			case 'ArrowUp':
				if (this.currentCoords.y - 1 >= 0) {
					this.currentCoords.y -= 1;
				}
				this.render();
				break;
			case 'ArrowDown':
				if (this.currentCoords.y + 1 <= MAX_ROW_INDEX) {
					this.currentCoords.y += 1;
				}
				this.render();
				break;
			case 'ArrowLeft':
				if (this.currentCoords.x - 1 >= 0) {
					this.currentCoords.x -= 1;
				}
				this.render();
				break;
			case 'ArrowRight':
				if (this.currentCoords.x + 1 <= MAX_CELL_INDEX) {
					this.currentCoords.x += 1;
				}
				this.render();
				break;
		}
	};

	render = () => {
		this.clearField();
		this.gameCells.forEach((row, rowIndex) => {
			row.forEach((cell, cellIndex) => {
				if (
					this.currentCoords.y === rowIndex &&
					this.currentCoords.x === cellIndex
				) {
					cell.classList.add('player');
				}
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
	clearField = () => {
		this.gameCells.forEach((row) => {
			row.forEach((cell) => {
				cell.classList.remove('player');
			});
		});
	};
	finish = () => {
		modalNode.querySelector('#level')!.textContent =
			this.levelNumber.toString();
		modalNode.querySelector('#submit')!.addEventListener(`click`, () => {
			this.onSubmit(this);
			finishModal.hide();
		});
        this.isFinished = true;
		finishModal.show();
	};

	destroyLevel = () => {
		gameNode.innerHTML = ``;
		document.removeEventListener(`keydown`, this.onKeyDown);
	};
}
