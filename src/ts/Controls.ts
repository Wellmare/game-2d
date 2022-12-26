import { isMobile } from './init';
import { ControlsSelectors, ICoords, Sides } from './types';

export class Controls {
	private isDisabled = false;

	constructor (
		private readonly rows: number,
		private readonly cells: number,
		private readonly currentCoords: ICoords,
		private readonly render: () => void
	) {
		if (isMobile) {
            document.querySelector(ControlsSelectors.CONTROLS_HINT)!.classList.add('d-none');
            document.querySelector(ControlsSelectors.MOBILE_CONTROLS)!.classList.remove('d-none');
            this.onMobileInit();
		} else {
            document.querySelector(ControlsSelectors.CONTROLS_HINT)!.classList.remove('d-none');
            document.querySelector(ControlsSelectors.MOBILE_CONTROLS)!.classList.add('d-none');
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

		const MAX_ROW_INDEX = this.rows - 1;
		const MAX_CELL_INDEX = this.cells - 1;

		switch (side) {
		case Sides.UP:
			if (this.currentCoords.y - 1 >= 0) {
				this.currentCoords.y -= 1;
			}
			break;
		case Sides.DOWN:
			if (this.currentCoords.y + 1 <= MAX_ROW_INDEX) {
				this.currentCoords.y += 1;
			}
			break;
		case Sides.LEFT:
			if (this.currentCoords.x - 1 >= 0) {
				this.currentCoords.x -= 1;
			}
			break;
		case Sides.RIGHT:
			if (this.currentCoords.x + 1 <= MAX_CELL_INDEX) {
				this.currentCoords.x += 1;
			}
			break;
		}
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
