export class GameLoop {
    private lastTime = 0;
    private running = false;

    constructor(
        private readonly updateFn: (dt: number) => void,
        private readonly renderFn: () => void
    ) {}

    start(): void {
        if (this.running) {
            return;
        }

        this.running = true;
        this.lastTime = performance.now();
        requestAnimationFrame(this.tick);
    }

    stop(): void {
        this.running = false;
    }

    private tick = (currentTime: number): void => {
        if (!this.running) {
            return;
        }

        const dt = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;

        this.updateFn(dt);
        this.renderFn();

        requestAnimationFrame(this.tick);
    };
}