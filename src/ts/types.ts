export interface ICoords {
	x: number;
	y: number;
}

export interface ILevel {
	level: number;
	size: {
		rows: number;
		cells: number;
	};
	spawnCoords: ICoords;
	finishCoords: ICoords;
}
