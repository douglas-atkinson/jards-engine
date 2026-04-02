import Engine from '../engine/Engine';

export default abstract class Scene {
    protected engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    public abstract update(deltaTime: number): void;
    public abstract render(ctx: CanvasRenderingContext2D): void;

    public onEnter(): void {}

    public onExit(): void {}
}