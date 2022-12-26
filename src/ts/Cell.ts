import { CellRole, Field, ICoords } from './types';
import { equateCoords } from './utils';

export class Cell {
	public cellElement: HTMLDivElement = document.createElement('div');
	private type: CellRole = CellRole.EMPTY;

	static playerCoords: ICoords;

	// private isFinish: boolean = false;
	// private isPlayer: boolean = false;
	// private isWall: boolean = false;

	constructor(
		private readonly cellCoords: ICoords,
		private playerCoords: ICoords,
		private role: CellRole
	) {
		this.cellElement.classList.add('game-cell');
	}

	render = (): HTMLDivElement => {
		this.clearClasses();

		if (equateCoords(this.cellCoords, this.playerCoords)) {
			this.cellElement.classList.add('player');
		}
		if (this.role === CellRole.FINISH) {
			this.cellElement.classList.add('finish');
		}
		if (this.role === CellRole.WALL) {
			this.cellElement.classList.add('wall');
		}
		return this.cellElement;
	};

	clearClasses = () => {
		this.cellElement.classList.remove('player');
		this.cellElement.classList.remove('finish');
	};

	static getCellTypeByCoords = (
		y: number,
		x: number,
		field: Field
	): CellRole | null => {
		// console.log('x: ' + x);
		// console.log('y: ' + y);
		if (field[y][x].role) return field[y][x].role;
		return null;
	};

	static getCellsCoordsByRole = (
		field: Field,
		role: CellRole
	): ICoords[] | null => {
		let result: ICoords[] = [];
		field.forEach((row, indexRow) => {
			row.forEach((cell, indexCell) => {
				if (cell.role === role) {
					result.push({ x: indexCell, y: indexRow });
				}
			});
		});

		return result.length === 0 ? null : result;
	};
}
