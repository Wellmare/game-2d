import { Modal } from "bootstrap";

import "../css/index.css";
import Level from "./Level";
import { levels } from "./levels";

export const modalNode = document.querySelector("#finish-modal")!;
export const finishModal = new Modal("#finish-modal");

let levelIndex = 0;

let prevLevel: Level;

renderCurrentLevel();

function renderCurrentLevel(): void {
  prevLevel?.destroyLevel();
  const currentLevel = levels[levelIndex];
  if (currentLevel !== undefined) {
    const rows = currentLevel.size.rows;
    const cells = currentLevel.size.cells;
    const spawnCoords = currentLevel.spawnCoords;
    const finishCoords = currentLevel.finishCoords;

    prevLevel = new Level(
      rows,
      cells,
      finishCoords,
      spawnCoords,
      nextLevel,
      currentLevel.level
    );
  } else {
    new Modal("#game-end-modal").show();
  }
}

function nextLevel(instance: Level): void {
  if (instance.levelNumber === levelIndex + 1) {
    levelIndex++;
    renderCurrentLevel();
  }
}
