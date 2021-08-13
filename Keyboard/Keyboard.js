/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Keyboard extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("keyboard-a", "./Keyboard/costumes/keyboard-a.svg", {
        x: 72,
        y: 68
      }),
      new Costume("keyboard-b", "./Keyboard/costumes/keyboard-b.svg", {
        x: 72,
        y: 68
      })
    ];

    this.sounds = [
      new Sound("C Elec Piano", "./Keyboard/sounds/C Elec Piano.wav"),
      new Sound("D Elec Piano", "./Keyboard/sounds/D Elec Piano.wav"),
      new Sound("E Elec Piano", "./Keyboard/sounds/E Elec Piano.wav"),
      new Sound("F Elec Piano", "./Keyboard/sounds/F Elec Piano.wav"),
      new Sound("G Elec Piano", "./Keyboard/sounds/G Elec Piano.wav"),
      new Sound("A Elec Piano", "./Keyboard/sounds/A Elec Piano.wav"),
      new Sound("B Elec Piano", "./Keyboard/sounds/B Elec Piano.wav"),
      new Sound("C2 Elec Piano", "./Keyboard/sounds/C2 Elec Piano.wav"),
      new Sound("ricky", "./Keyboard/sounds/rick-roll.wav"),
      new Sound("spider", "./Keyboard/sounds/spider.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "1" }, this.whenKey1Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "2" }, this.whenKey2Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "3" }, this.whenKey3Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "4" }, this.whenKey4Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "5" }, this.whenKey5Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "6" }, this.whenKey6Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "7" }, this.whenKey7Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "8" }, this.whenKey8Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "9" }, this.whenKey9Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      )
    ];
  }

  *whenKey1Pressed() {
    yield* this.startSound("C Elec Piano");
    this.costume = "keyboard-b";
    yield* this.wait(1);
    this.costume = "keyboard-a";
  }

  *whenKey2Pressed() {
    yield* this.startSound("D Elec Piano");
    this.costume = "keyboard-b";
    yield* this.wait(1);
    this.costume = "keyboard-a";
  }

  *whenKey3Pressed() {
    yield* this.startSound("E Elec Piano");
    this.costume = "keyboard-b";
    yield* this.wait(1);
    this.costume = "keyboard-a";
  }

  *whenKey4Pressed() {
    yield* this.startSound("F Elec Piano");
    this.costume = "keyboard-b";
    yield* this.wait(1);
    this.costume = "keyboard-a";
  }

  *whenKey5Pressed() {
    yield* this.startSound("G Elec Piano");
    this.costume = "keyboard-b";
    yield* this.wait(1);
    this.costume = "keyboard-a";
  }

  *whenKey6Pressed() {
    yield* this.startSound("A Elec Piano");
    this.costume = "keyboard-b";
    yield* this.wait(1);
    this.costume = "keyboard-a";
  }

  *whenKey7Pressed() {
    yield* this.startSound("B Elec Piano");
    this.costume = "keyboard-b";
    yield* this.wait(1);
    this.costume = "keyboard-a";
  }

  *whenKey8Pressed() {
    yield* this.startSound("C2 Elec Piano");
    this.costume = "keyboard-b";
    yield* this.wait(1);
    this.costume = "keyboard-a";
  }

  *whenKey9Pressed() {
    yield* this.startSound("ricky");
    this.costume = "keyboard-b";
    yield* this.wait(1);
    this.costume = "keyboard-a";
  }

  *whenKeySPressed() {
    yield* this.startSound("spider");
    this.costume = "keyboard-b";
    yield* this.wait(1);
    this.costume = "keyboard-a";
  }

  *whenKeySpacePressed() {
    for (let i = 0; i < 5; i++) {
      yield* this.startSound("C Elec Piano");
      yield* this.wait(1);
      yield* this.startSound("D Elec Piano");
      yield* this.wait(1);
      yield* this.startSound("C2 Elec Piano");
      yield* this.wait(1);
      yield* this.startSound("F Elec Piano");
      yield* this.wait(0.5);
      yield* this.startSound("A Elec Piano");
      yield* this.wait(1.5);
      yield* this.startSound("B Elec Piano");
      yield* this.wait(0.7);
      yield* this.startSound("G Elec Piano");
      yield* this.wait(1);
      yield* this.startSound("E Elec Piano");
      yield;
    }
    yield* this.playSoundUntilDone("C Elec Piano");
    yield* this.playSoundUntilDone("E Elec Piano");
    yield* this.playSoundUntilDone("D Elec Piano");
    yield* this.playSoundUntilDone("F Elec Piano");
    yield* this.playSoundUntilDone("E Elec Piano");
    yield* this.playSoundUntilDone("A Elec Piano");
    yield* this.playSoundUntilDone("G Elec Piano");
    yield* this.playSoundUntilDone("C2 Elec Piano");
    yield* this.playSoundUntilDone("B Elec Piano");
    yield* this.playSoundUntilDone("ricky");
    yield* this.playSoundUntilDone("spider");
  }
}
