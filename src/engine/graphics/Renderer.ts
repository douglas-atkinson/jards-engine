export class Renderer {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        const context = canvas.getContext("2d");

        if (!context) {
            throw new Error("Failed to acquire 2D rendering context.");
        }

        this.canvas = canvas;
        this.ctx = context;
    }

    clear(color = "#222"): void {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawText(
        text: string,
        x: number,
        y: number,
        color = "#ffffff",
        font = "24px Arial",
        align: CanvasTextAlign = "left"
    ): void {
        this.ctx.fillStyle = color;
        this.ctx.font = font;
        this.ctx.textAlign = align;
        this.ctx.fillText(text, x, y);
    }

    getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    getContext(): CanvasRenderingContext2D {
        return this.ctx;
    }

    getWidth(): number {
        return this.canvas.width;
    }

    getHeight(): number {
        return this.canvas.height;
    }
}