import { Game } from "./engine/core/Game";
import { BootScene } from "./games/whac-a-mole/scenes/BootScene";

function main(): void {
    const game = new Game({
        canvasId: "gameCanvas",
        width: 800,
        height: 600,
        startingScene: new BootScene(),
    });

    game.start();
}

main();