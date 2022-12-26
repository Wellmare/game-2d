import { CellRole, ILevel } from './types';

export const levels: ILevel[] = [
	{
		levelName: '1',
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
		levelName: '2',
		field: [
			[
				{ role: CellRole.PLAYER },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL }
			],
			[
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL }
			],
			[
				{ role: CellRole.EMPTY },
				{ role: CellRole.FINISH },
				{ role: CellRole.WALL }
			], [
				{ role: CellRole.EMPTY },
				{ role: CellRole.EMPTY },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL },
				{ role: CellRole.WALL }
			]
		]
	}
];
