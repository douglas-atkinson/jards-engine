import Scene from './Scene';
import Engine from '../engine/Engine';

export default class PlayScene extends Scene {
    constructor(engine: Engine) {
        super(engine);
    }

    public update(_deltaTime: number): void {}

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = 'darkgreen';
        ctx.fillRect(0, 0, this.engine.width, this.engine.height);

        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.fillText('Game Running...', 50, 100);
    }

    public onEnter(): void {
        console.log('Entered PlayScene');
    }

    public onExit(): void {
        console.log('Exited PlayScene');
    }
}