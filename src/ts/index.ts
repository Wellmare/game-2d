import '../css/index.css';

import { Game } from './Game';
import { init } from './init';
import { levels } from './levels';

export const game = new Game(levels);

init();