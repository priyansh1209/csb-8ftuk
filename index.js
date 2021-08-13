import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Keyboard from "./Keyboard/Keyboard.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Keyboard: new Keyboard({
    x: 13,
    y: -12.999999999999993,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 60 // Set to 60 to make your project run faster
});
export default project;
