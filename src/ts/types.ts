export interface ICoords {
	x: number
	y: number
}

export type Field = Array<Array<{ role: CellRole }>>;

export interface ILevel {
	levelName: string
	field: Field
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
	MODAL = '#game-end-modal',
	RETRY_GAME_BUTTON = '#retry-game'
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

export const enum CellRole {
	EMPTY = 'empty',
	PLAYER = 'player',
	FINISH = 'finish',
	WALL = 'wall'
}
export interface ISetLevelProps {
	levelName: string
	onSubmit: () => void
	playerCoords: ICoords
	field: Field
}
