import { Scene } from "./Scene";
import type { Renderer } from "../graphics/Renderer";

export class SceneManager {
    private currentScene: Scene | null = null;

    changeScene(newScene: Scene): void {
        if (this.currentScene !== null) {
            this.currentScene.exit();
        }

        this.currentScene = newScene;
        this.currentScene.enter();
    }

    update(dt: number): void {
        this.currentScene?.update(dt);
    }

    render(renderer: Renderer): void {
        this.currentScene?.render(renderer);
    }

    getCurrentScene(): Scene | null {
        return this.currentScene;
    }
}