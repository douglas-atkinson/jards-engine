import type { Renderer } from "../graphics/Renderer";

export abstract class Scene {
    enter(): void {
        // Optional hook for setup when the scene becomes active.
    }

    exit(): void {
        // Optional hook for cleanup when the scene is replaced.
    }

    update(_dt: number): void {
        // Optional per-frame update.
    }

    render(_renderer: Renderer): void {
        // Optional per-frame render.
    }
}