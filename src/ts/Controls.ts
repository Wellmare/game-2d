import { Cell } from './Cell';
import { isMobile } from './init';
import { CellRole, ControlsSelectors, Field, ICoords, Sides } from './types';

export class Controls {
	private isDisabled = false;

	constructor (
		private readonly playerCoords: ICoords,
		private readonly render: () => void,
		private readonly field: Field
	) {
		if (isMobile) {
			document
				.querySelector(ControlsSelectors.CONTROLS_HINT)!
				.classList.add('d-none');
			document
				.querySelector(ControlsSelectors.MOBILE_CONTROLS)!
				.classList.remove('d-none');
			this.onMobileInit();
		} else {
			document
				.querySelector(ControlsSelectors.CONTROLS_HINT)!
				.classList.remove('d-none');
			document
				.querySelector(ControlsSelectors.MOBILE_CONTROLS)!
				.classList.add('d-none');
			document.addEventListener('keydown', this.onKeyDown);
		}
	}

	onKeyDown = (e: KeyboardEvent): void => {
		const key = e.key;
		if (
			key !== 'ArrowUp' &&
			key !== 'ArrowDown' &&
			key !== 'ArrowLeft' &&
			key !== 'ArrowRight'
		) {
			return;
		}

		switch (key) {
		case 'ArrowUp':
			this.movePlayer(Sides.UP);
			break;
		case 'ArrowDown':
			this.movePlayer(Sides.DOWN);
			break;
		case 'ArrowLeft':
			this.movePlayer(Sides.LEFT);
			break;
		case 'ArrowRight':
			this.movePlayer(Sides.RIGHT);
			break;
		}
	};

	movePlayer = (side: Sides): void => {
		if (this.isDisabled) return;

		const MAX_ROW_INDEX = this.field.length - 1;
		const MAX_CELL_INDEX = this.field[0].length - 1;

		const newCoords: ICoords = Object.assign({}, this.playerCoords);

		switch (side) {
		case Sides.UP:
			if (this.playerCoords.y - 1 >= 0) {
				newCoords.y -= 1;
			}
			break;
		case Sides.DOWN:
			if (this.playerCoords.y + 1 <= MAX_ROW_INDEX) {
				newCoords.y += 1;
			}
			break;
		case Sides.LEFT:
			if (this.playerCoords.x - 1 >= 0) {
				newCoords.x -= 1;
			}
			break;
		case Sides.RIGHT:
			if (this.playerCoords.x + 1 <= MAX_CELL_INDEX) {
				newCoords.x += 1;
			}
			break;
		}

		if (
			Cell.getCellTypeByCoords(newCoords.y, newCoords.x, this.field) ===
			CellRole.WALL
		) {
			return;
		}

		this.playerCoords.x = newCoords.x;
		this.playerCoords.y = newCoords.y;
		this.render();
	};

	onMobileInit = (): void => {
		document
			.querySelector(ControlsSelectors.UP_BUTTON)!
			.addEventListener('click', () => this.movePlayer(Sides.UP));
		document
			.querySelector(ControlsSelectors.DOWN_BUTTON)!
			.addEventListener('click', () => this.movePlayer(Sides.DOWN));
		document
			.querySelector(ControlsSelectors.LEFT_BUTTON)!
			.addEventListener('click', () => this.movePlayer(Sides.LEFT));
		document
			.querySelector(ControlsSelectors.RIGHT_BUTTON)!
			.addEventListener('click', () => this.movePlayer(Sides.RIGHT));
	};

	disableControls = (): void => {
		this.isDisabled = true;
		if (!isMobile) {
			document.removeEventListener('keydown', this.onKeyDown);
		}
	};
}
