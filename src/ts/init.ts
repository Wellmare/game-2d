// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import isMobileFunc from 'ismobilejs';
import { finishModalNode, finishModal } from './Game';
import { game } from './index';
import { onSubmit } from './Level';
import { FinishModalSelectors } from './types';

export let isMobile: boolean;

export const init = (): void => {
	const isMobileResponse = isMobileFunc({
		platform: 'any',
		userAgent: navigator.userAgent,
		maxTouchPoints: 2
	});
	isMobile = isMobileResponse.any;

	game.renderCurrentLevel();

	finishModalNode
		.querySelector(FinishModalSelectors.SUBMIT_BTN)!
		.addEventListener('click', () => {
			finishModal.hide();
			onSubmit();
		});
	finishModalNode
		.querySelector(FinishModalSelectors.RETRY_BTN)!
		.addEventListener('click', () => {
			finishModal.hide();
			game.renderCurrentLevel();
		});
};
