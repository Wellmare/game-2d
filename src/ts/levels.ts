import { CellRole, ILevel } from './types';

export const levels: ILevel[] = [
	{
		levelName: '1 easy',
		field: [
			[
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.PLAYER }
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
		levelName: '2 cave',
		field: [
			[
				{ role: CellRole.PLAYER },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY }
			],
			[
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY }
			],
			[
				{ role: CellRole.WALL },
				{ role: CellRole.FINISH },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY }
			], [
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL }
			]
		]
	},
	{
		levelName: '3',
		field: [
			[
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL }
			],
			[
				{ role: CellRole.PLAYER },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY }
			],
			[
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
				{ role: CellRole.FINISH },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY }
			], [
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY }
			], [
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY }
			]
		]
	},
	{
		levelName: '4 troll',
		field: [
			[
				{ role: CellRole.FINISH },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL }
			],
			[
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY }
			],
			[
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.PLAYER },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY }
			], [
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY }
			], [
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY }
			]
		]
	},
	{
		levelName: '5 think',
		field: [
			[
				{ role: CellRole.PLAYER },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.FINISH }
			],
			[
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY }
			],
			[
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY }
			],
			[
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY }
			],
			[
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.EMPTY }
			]
		]
	}
];
