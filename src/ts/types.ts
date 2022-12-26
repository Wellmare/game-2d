export interface ICoords {
	x: number;
	y: number;
}

export interface ILevel {
	level: number;
	size: {
		rows: number;
		cells: number;
	};
	spawnCoords: ICoords;
	finishCoords: ICoords;
}

export const enum Selectors {
	CURRENT_LEVEL_SPAN = '#current-level',
	GAME = '#game'
}

export const enum FinishModalSelectors {
	MODAL = '#finish-modal',
	LEVEL_SPAN = '#level',
	RETRY_BTN = '#retry-btn',
	SUBMIT_BTN = '#submit-btn'
}

export const enum EndGameModalSelectors {
	MODAL = '#game-end-modal'
}

export const enum ControlsSelectors {
	CONTROLS_HINT = '#controls-hint',
	MOBILE_CONTROLS = '#controls',
	UP_BUTTON = '#up-btn',
	DOWN_BUTTON = '#down-btn',
	LEFT_BUTTON = '#left-btn',
	RIGHT_BUTTON = '#right-btn'
}

export const enum Sides {
	UP = 'up',
	DOWN = 'DOWN',
	LEFT = 'LEFT',
	RIGHT = 'RIGHT'
}

export const enum CellTypes {
	EMPTY,
	PLAYER,
	FINISH,
	WALL
}
