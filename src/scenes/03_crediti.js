var camera0, camera1

export default class SceneCrediti extends Phaser.Scene {

  constructor(){
    super("SceneCrediti");
  }

  init(){
      console.log("SceneCrediti - Executing init()");
  }

  preload() {
      console.log("SceneCrediti - Executing preload()");
      this.load.image("background_crediti", "assets/RENDER/CREDITI_SFONDO.png"); // carica l'immagine di sfond
      this.load.image("foreground_crediti", "assets/HUD/CREDITI_TXT.png"); // carica l'immagine di sfond
      this.load.image("menu_button_small", "assets/HUD/menu_button_small.png");


  }

  create() {
      console.log("SceneCrediti - Executing create()");
      this.cameras.main.fadeIn(2000, 0, 0, 0)
      this.cameras.main.shake(600, 0.003);

      this.background = this.add.image(1280, 720, "background_crediti").setOrigin(1,1).setScale(1);
      this.background = this.add.image(0, 0, "foreground_crediti").setOrigin(0,0).setScale(0.2249).setScrollFactor(0).setDepth(10);

      this.menu_button = this.add.image(1080, 615, "menu_button_small").setScale(0.9).setOrigin(0, 0).setDepth(11).setInteractive().setScrollFactor(0);
      this.menu_button.on("pointerdown", ()=>{ //quando viene clickato il bottone succedono cose
          console.log("BOTTONE menu PREMUTO");
          this.scene.start("SceneMenu", {id: 1});
      });

  }

  update(){
  }
}
