import { ILevel } from './types';

export const levels: ILevel[] = [
	{
		level: 1,
		size: {
			rows: 3,
			cells: 5
		},
		spawnCoords: { y: 0, x: 0 },
		finishCoords: { y: 2, x: 4 }
	},
	{
		level: 2,
		size: {
			rows: 4,
			cells: 6
		},
		spawnCoords: { y: 0, x: 0 },
		finishCoords: { y: 3, x: 1 }
	},
	{
		level: 3,
		size: {
			rows: 10,
			cells: 10
		},
		spawnCoords: { y: 4, x: 4 },
		finishCoords: { y: 9, x: 8 }
	},{
		level: 4,
		size: {
			rows: 3,
			cells: 5
		},
		spawnCoords: { y: 0, x: 0 },
		finishCoords: { y: 2, x: 4 }
	},
	{
		level: 5,
		size: {
			rows: 4,
			cells: 6
		},
		spawnCoords: { y: 0, x: 0 },
		finishCoords: { y: 3, x: 1 }
	},
	{
		level: 6,
		size: {
			rows: 10,
			cells: 10
		},
		spawnCoords: { y: 4, x: 4 },
		finishCoords: { y: 9, x: 8 }
	},
];
