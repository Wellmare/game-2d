import { CellRole, ILevel } from './types';

export const levels: ILevel[] = [
	{
		level: 1,
		field: [
			[
				{ role: CellRole.EMPTY },
				{ role: CellRole.PLAYER },
				{ role: CellRole.WALL }
			],
			[
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL }
			],
			[
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.FINISH }
			]
		]
	},
	{
		level: 2,
		field: [
			[
				{ role: CellRole.PLAYER },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
			],
			[
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
			],
			[
				{ role: CellRole.EMPTY },
				{ role: CellRole.FINISH },
				{ role: CellRole.WALL },
			],[
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
			]
		]
	},
	
	// {
	// 	level: 2,
	// 	size: {
	// 		rows: 4,
	// 		cells: 6
	// 	},
	// 	spawnCoords: { y: 0, x: 0 },
	// 	finishCoords: { y: 3, x: 1 }
	// },
	// {
	// 	level: 3,
	// 	size: {
	// 		rows: 7,
	// 		cells: 7
	// 	},
	// 	spawnCoords: { y: 0, x: 0 },
	// 	finishCoords: { y: 3, x: 5 }
	// },
	// {
	// 	level: 4,
	// 	size: {
	// 		rows: 3,
	// 		cells: 5
	// 	},
	// 	spawnCoords: { y: 0, x: 0 },
	// 	finishCoords: { y: 2, x: 4 }
	// },
	// {
	// 	level: 5,
	// 	size: {
	// 		rows: 4,
	// 		cells: 6
	// 	},
	// 	spawnCoords: { y: 0, x: 0 },
	// 	finishCoords: { y: 3, x: 1 }
	// },
	// {
	// 	level: 6,
	// 	size: {
	// 		rows: 3,
	// 		cells: 5
	// 	},
	// 	spawnCoords: { y: 0, x: 0 },
	// 	finishCoords: { y: 2, x: 4 }
	// },
	// {
	// 	level: 7,
	// 	size: {
	// 		rows: 4,
	// 		cells: 6
	// 	},
	// 	spawnCoords: { y: 0, x: 0 },
	// 	finishCoords: { y: 3, x: 1 }
	// },
	// {
	// 	level: 8,
	// 	size: {
	// 		rows: 7,
	// 		cells: 7
	// 	},
	// 	spawnCoords: { y: 0, x: 0 },
	// 	finishCoords: { y: 3, x: 5 }
	// },
	// {
	// 	level: 9,
	// 	size: {
	// 		rows: 3,
	// 		cells: 5
	// 	},
	// 	spawnCoords: { y: 0, x: 0 },
	// 	finishCoords: { y: 2, x: 4 }
	// },
	// {
	// 	level: 10,
	// 	size: {
	// 		rows: 4,
	// 		cells: 6
	// 	},
	// 	spawnCoords: { y: 0, x: 0 },
	// 	finishCoords: { y: 3, x: 1 }
	// }
];
