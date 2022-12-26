// import isMobile from '../../node_modules/ismobilejs/types/isMobile';
// @ts-ignore
import isMobileFunc from 'ismobilejs';
import { finishModalNode, finishModal } from './Game';
import { game } from './index';
// import { finishModal, finishModalNode, renderCurrentLevel } from './index';
import Level from './Level';
import { FinishModalSelectors } from './types';

export let isMobile: boolean;

export const init = () => {
	const isMobileResponse = isMobileFunc({
		platform: 'any',
		userAgent: navigator.userAgent,
		maxTouchPoints: 2
	});
	isMobile = isMobileResponse.any;

	game.renderCurrentLevel();

	finishModalNode
		.querySelector(FinishModalSelectors.SUBMIT_BTN)!
		.addEventListener(`click`, () => {
			finishModal.hide();
			// Level.destroyLevel();
			console.log('submit');
			debugger;
			Level.onSubmit();
		});
	finishModalNode
		.querySelector(FinishModalSelectors.RETRY_BTN)!
		.addEventListener(`click`, () => {
			finishModal.hide();
			// Level.destroyLevel();
			game.renderCurrentLevel();
		});
};
