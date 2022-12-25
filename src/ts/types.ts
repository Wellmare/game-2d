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
	CURRENT_LEVEL_SPAN = '#current-level'
}

export const enum FinishModalSelectors {
	FINISH_MODAL = '#finish-modal',
	LEVEL_SPAN = '#level',
	RETRY_BTN = '#retry-btn',
	SUBMIT_BTN = '#submit-btn'
}

export const enum ControlsSelectors {
	CONTROLS_HINT = '#controls-hint',
	MOBILE_CONTROLS = '#controls',
	UP_BUTTON = '#up-btn',
	DOWN_BUTTON = '#down-btn',
	LEFT_BUTTON = '#left-btn',
	RIGHT_BUTTON = '#right-btn'
}
