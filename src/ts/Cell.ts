import { CellTypes, ICoords } from './types';
import { equateCoords } from './utils';

export class Cell {
	public cellElement: HTMLDivElement = document.createElement('div');
	private type: CellTypes = CellTypes.EMPTY;

	// private isFinish: boolean = false;
	// private isPlayer: boolean = false;
	// private isWall: boolean = false;

	constructor (
		private readonly cellCoords: ICoords,
		private readonly currentCoords: ICoords,
		private readonly finishCoords: ICoords
	) {
		this.cellElement.classList.add('game-cell');
	}

	render = (): HTMLDivElement => {
		this.type = CellTypes.EMPTY;
		if (equateCoords(this.currentCoords, this.cellCoords)) this.type = CellTypes.PLAYER;
		if (equateCoords(this.finishCoords, this.cellCoords)) this.type = CellTypes.FINISH;

		this.clearClasses();

		if (this.type === CellTypes.PLAYER) {
			this.cellElement.classList.add('player');
		}
		if (this.type === CellTypes.FINISH) {
			this.cellElement.classList.add('finish');
		}
		return this.cellElement;
	};

	clearClasses = (): void => {
		this.cellElement.classList.remove('player');
		this.cellElement.classList.remove('finish');
	};
}
