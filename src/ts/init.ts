// import isMobile from '../../node_modules/ismobilejs/types/isMobile';
// @ts-ignore
import isMobileFunc from 'ismobilejs';
import { renderCurrentLevel } from './index';

export let isMobile: boolean;

export const init = () => {
	const isMobileResponse = isMobileFunc({
		platform: 'any',
		userAgent: navigator.userAgent,
		maxTouchPoints: 2
	});
	isMobile = isMobileResponse.any;

    renderCurrentLevel()
};
