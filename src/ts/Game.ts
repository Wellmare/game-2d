import { Modal } from 'bootstrap';
import { Cell } from './Cell';
import { setLevel } from './Level';
import {
	CellRole,
	EndGameModalSelectors,
	FinishModalSelectors,
	ICoords,
	ILevel,
	Selectors
} from './types';

export const finishModalNode = document.querySelector(
	FinishModalSelectors.MODAL
)!;
export const finishModal = new Modal(FinishModalSelectors.MODAL);
export const endGameModal = new Modal(EndGameModalSelectors.MODAL);

export class Game {
	private currentLevelIndex = 0;
	private currentLevel!: ILevel;
	private readonly gameNode: HTMLDivElement = document.querySelector(
		Selectors.GAME
	)!;

	constructor (private readonly levels: ILevel[]) {}

	start = (): void => {
		this.renderCurrentLevel();
	};

	renderCurrentLevel = (): void => {
		try {
			this.currentLevel = this.levels[this.currentLevelIndex];

			if (this.currentLevel !== undefined) {
				const { levelName, field } = this.currentLevel;

				let playerCoords: ICoords = { x: 0, y: 0 };
				const playerCoordsArray = Cell.getCellsCoordsByRole(
					field,
					CellRole.PLAYER
				);
				if (
					playerCoordsArray != null &&
					playerCoordsArray?.length !== 0
				) {
					playerCoords = playerCoordsArray[0];
				}
				// if (!playerCoords)

				setLevel({
					levelName,
					onSubmit: this.nextLevel,
					playerCoords,
					field
				});
			} else {
				throw new Error('Level not defined');
			}
		} catch (e) {
			this.onEndGame();
		}
	};

	nextLevel = (): void => {
		this.currentLevelIndex++;
		this.renderCurrentLevel();
	};

	retryGame = (): void => {
		this.currentLevelIndex = 0;
		this.renderCurrentLevel();
	};

	onEndGame = (): void => {
		this.gameNode.innerHTML = '';
		endGameModal.show();
		document
			.querySelector(EndGameModalSelectors.RETRY_GAME_BUTTON)!
			.addEventListener('click', () => {
				this.retryGame();
				endGameModal.hide();
			});
	};
}
