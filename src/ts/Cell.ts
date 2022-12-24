import { CellTypes, ICoords } from './types';

export class Cell {
	public cellElement: HTMLDivElement = document.createElement('div');
	private type: CellTypes = CellTypes.EMPTY;

	private isFinish: boolean = false;
	private isPlayer: boolean = false;
	private isWall: boolean = false;

	constructor(
		private cellCoords: ICoords,
		private readonly currentCoords: ICoords,
		private readonly finishCoords: ICoords
	) {
		this.cellElement.classList.add('game-cell');
	}

	render = (): HTMLDivElement => {
		this.isPlayer =
			this.currentCoords.y === this.cellCoords.y &&
			this.currentCoords.x === this.cellCoords.x;
		this.isFinish =
			this.finishCoords.y === this.cellCoords.y &&
			this.finishCoords.x === this.cellCoords.x;

		this.clearClasses();

		if (this.isPlayer) {
			this.cellElement.classList.add('player');
		}
		if (this.isFinish) {
			this.cellElement.classList.add('finish');
		}
		return this.cellElement;
	};

	clearClasses = () => {
		this.cellElement.classList.remove('player');
		this.cellElement.classList.remove('finish');
	};
}
