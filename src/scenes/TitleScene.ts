import Scene from './Scene';
import Engine from '../engine/Engine';

export default class TitleScene extends Scene {
    private onStartRequested: () => void;
    private handleKeyDown!: (event: KeyboardEvent) => void;

    constructor(engine: Engine, onStartRequested: () => void) {
        super(engine);
        this.onStartRequested = onStartRequested;
    }

    public update(_deltaTime: number): void {}

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, this.engine.width, this.engine.height);

        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.fillText('JARDS Engine', 50, 100);
        ctx.fillText('Press Enter to Start', 50, 150);
    }

    public onEnter(): void {
        console.log('Entered TitleScene');

        this.handleKeyDown = (event: KeyboardEvent): void => {
            if (event.key === 'Enter') {
                this.onStartRequested();
            }
        };

        window.addEventListener('keydown', this.handleKeyDown);
    }

    public onExit(): void {
        console.log('Exited TitleScene');
        window.removeEventListener('keydown', this.handleKeyDown);
    }
}