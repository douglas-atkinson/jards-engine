import { GameLoop } from "./GameLoop";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";
import { Renderer } from "../graphics/Renderer";

interface GameOptions {
    canvasId: string;
    width: number;
    height: number;
    startingScene: Scene;
}

export class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly renderer: Renderer;
    private readonly sceneManager: SceneManager;
    private readonly gameLoop: GameLoop;

    constructor(options: GameOptions) {
        const canvasElement = document.getElementById(options.canvasId);

        if (!(canvasElement instanceof HTMLCanvasElement)) {
            throw new Error(`Canvas element with id "${options.canvasId}" was not found.`);
        }

        this.canvas = canvasElement;
        this.canvas.width = options.width;
        this.canvas.height = options.height;

        this.renderer = new Renderer(this.canvas);
        this.sceneManager = new SceneManager();
        this.sceneManager.changeScene(options.startingScene);

        this.gameLoop = new GameLoop(
            (dt: number) => this.update(dt),
            () => this.render()
        );
    }

    start(): void {
        this.gameLoop.start();
    }

    private update(dt: number): void {
        this.sceneManager.update(dt);
    }

    private render(): void {
        this.sceneManager.render(this.renderer);
    }
}