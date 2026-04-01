import { Scene } from "../../../engine/core/Scene";
import type { Renderer } from "../../../engine/graphics/Renderer";

export class BootScene extends Scene {
    private elapsedTime = 0;

    update(dt: number): void {
        this.elapsedTime += dt;
    }

    render(renderer: Renderer): void {
        renderer.clear("#1e1e2f");

        renderer.drawText(
            "JARDS Engine",
            renderer.getWidth() / 2,
            180,
            "#ffffff",
            "36px Arial",
            "center"
        );

        renderer.drawText(
            "Milestone 1: Project Skeleton",
            renderer.getWidth() / 2,
            240,
            "#7dd3fc",
            "24px Arial",
            "center"
        );

        renderer.drawText(
            `Elapsed Time: ${this.elapsedTime.toFixed(2)}s`,
            renderer.getWidth() / 2,
            320,
            "#cbd5e1",
            "20px Arial",
            "center"
        );

        renderer.drawText(
            "The engine is alive.",
            renderer.getWidth() / 2,
            380,
            "#86efac",
            "22px Arial",
            "center"
        );
    }
}