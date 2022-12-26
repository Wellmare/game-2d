import { Modal } from 'bootstrap';
import Level from './Level';
import {
	EndGameModalSelectors,
	FinishModalSelectors,
	ILevel,
	Selectors
} from './types';

export const finishModalNode = document.querySelector(
	FinishModalSelectors.MODAL
)!;
export const finishModal = new Modal(FinishModalSelectors.MODAL);
export const endGameModal = new Modal(EndGameModalSelectors.MODAL);

export class Game {
	private currentLevelIndex: number = 0;
	private currentLevel!: ILevel;
	private gameNode: HTMLDivElement = document.querySelector(Selectors.GAME)!;

	constructor(private readonly levels: ILevel[]) {}

    start = (): void => {
        this.renderCurrentLevel()
    }

	renderCurrentLevel = (): void => {
		this.currentLevel = this.levels[this.currentLevelIndex];
		const {
			finishCoords,
			level,
			size: { rows, cells },
			spawnCoords
		} = this.currentLevel;
		Level.setLevel({
			cells,
			finishCoords,
			levelNumber: level,
			onSubmit: this.nextLevel,
			rows,
			spawnCoords
		});
	};

	nextLevel = (): void => {
		if (Level.levelNumber === this.currentLevelIndex + 1) {
			this.currentLevelIndex++;
			this.renderCurrentLevel();
		}
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
