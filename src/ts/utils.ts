import { ICoords } from './types';

export const equateCoords = (coords1: ICoords, coords2: ICoords): boolean => {
	return coords1.x === coords2.x && coords1.y === coords2.y;
};
