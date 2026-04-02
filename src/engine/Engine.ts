import Scene from '../scenes/Scene';

export default class Engine {
    public readonly canvas: HTMLCanvasElement;
    public readonly ctx: CanvasRenderingContext2D;
    public readonly width: number;
    public readonly height: number;

    private lastTime: number = 0;
    private isRunning: boolean = false;

    public currentScene: Scene | null = null;

    constructor(canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            throw new Error('Could not get 2D rendering context.');
        }

        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
    }

    public setScene(scene: Scene): void {
        if (this.currentScene) {
            this.currentScene.onExit();
        }

        this.currentScene = scene;
        this.currentScene.onEnter();
    }

    public start(): void {
        if (this.isRunning) {
            return;
        }

        this.isRunning = true;
        this.lastTime = performance.now();
        requestAnimationFrame(this.gameLoop);
    }

    private gameLoop = (timestamp: number): void => {
        const deltaTime = (timestamp - this.lastTime) / 1000;
        this.lastTime = timestamp;

        if (this.currentScene) {
            this.currentScene.update(deltaTime);
            this.currentScene.render(this.ctx);
        }

        requestAnimationFrame(this.gameLoop);
    };
}