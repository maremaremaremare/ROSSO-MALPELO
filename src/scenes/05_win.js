export default class SceneWin extends Phaser.Scene {



      constructor(){
        super("SceneWin");
      }

      init(){
          console.log("SceneWin - Executing init()");


      }

      preload() {
          console.log("SceneWin - Executing preload()");
          this.load.image("Win", "assets/RENDER/WIN.png");// Carica bottone PLAY
          this.load.image("menu_button_small", "assets/HUD/menu_button_small.png");
      }

      create() {
          console.log("SceneWin - Executing create()");
          this.background = this.add.image(0, 0, "Win").setOrigin(0,0).setScale(1).setScrollFactor(0).setDepth(10);
          this.menu_button = this.add.image(1080, 615, "menu_button_small").setScale(0.9).setOrigin(0, 0).setDepth(100).setInteractive();
          this.menu_button.on("pointerdown", ()=>{
              console.log("MENU premuto");
              this.scene.start("SceneMenu", {id: 1});
          });

      }

      update(){
      }
    }
