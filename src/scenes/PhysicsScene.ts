import Phaser from 'phaser';

const NUM_MARIOS = 10;
export default class PhysicsScene extends Phaser.Scene {
  preload = () => {
    this.load.image('mario', 'https://i.imgur.com/nKgMvuj.png');
    this.load.image('background', 'https://i.imgur.com/dzpw15B.jpg');
  };
  create = () => {
    this.add.text(0,0,'Main Scene - with physics', {color: '#fff', fontSize: '16px'});

    this.physics.world.setBounds(0, 0, 1024, 768);

    this.add.image(0, 0, 'background')
      .setOrigin(0, 0) // Anchor to top left so (0,0) is flush against the corner
      .setDisplaySize(1024, 768) // Fit background image to window
      .setDepth(-1); // Behind everything

    for (let i = 0; i < NUM_MARIOS; i++) {
      this.physics.add.image(32, 32, 'mario')
        .setVelocity(Math.random() * 500, Math.random() * 500)
        .setMass(128)
        .setCollideWorldBounds(true, 0.98, 0.98)
        .setDisplaySize(32, 32);
    }
  };

  update = (time: number, delta: number) => {
    // do something every tick here
  }
}
