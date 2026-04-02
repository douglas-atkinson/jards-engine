import Engine from './engine/Engine';
import TitleScene from './scenes/TitleScene';
import PlayScene from './scenes/PlayScene';

const canvas = document.querySelector('canvas') as HTMLCanvasElement | null;

if (!canvas) {
    throw new Error('Canvas element not found.');
}

const engine = new Engine(canvas);
const playScene = new PlayScene(engine);

const titleScene = new TitleScene(engine, () => {
    engine.setScene(playScene);
});

engine.setScene(titleScene);
engine.start();