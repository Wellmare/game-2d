// import isMobile from '../../node_modules/ismobilejs/types/isMobile';
// @ts-ignore
import isMobileFunc from 'ismobilejs';
import { finishModal, finishModalNode, renderCurrentLevel } from './index';
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

	renderCurrentLevel();

	finishModalNode
		.querySelector(FinishModalSelectors.SUBMIT_BTN)!
		.addEventListener(`click`, () => {
			finishModal.hide();
			// Level.destroyLevel();
			Level.onSubmit();
		});
	finishModalNode
		.querySelector(FinishModalSelectors.RETRY_BTN)!
		.addEventListener(`click`, () => {
			finishModal.hide();
			// Level.destroyLevel();
			renderCurrentLevel()
		});
};
