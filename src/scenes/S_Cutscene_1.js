export default class SceneCutscene extends Phaser.Scene {

      background_finale;        // oggetto relativo all'elemento "sfondo"

      constructor(){
        super("SceneCutscene");
      }

      init(){
          console.log("SceneCutscene - Executing init()");
      }

      preload() {
          console.log("SceneCutscene - Executing preload()");

          //SOGNO
          this.load.image("storia_1", "assets/STORIA_1.png");
          //TXT
          this.load.image("malpelo_txt", "assets/malpelo_txt.png");
          this.load.image("start_txt", "assets/start_txt.png");

      }

      create() {
          console.log("sceneCutscene - Executing create()");

          this.cameras.main.fadeIn(2500, 0, 0, 0)
          this.cameras.main.setZoom(1);
          this.cameras.main.centerOn(0, 0);

          this.storia_1 = this.add.image(0, 0, "storia_1").setScale(1).setOrigin(0, 0).setScrollFactor(0).setDepth(1);

          this.malpelo_txt_1 = this.add.image(1280/2, 720/2, "malpelo_txt").setScale(0.4).setOrigin(0, 0).setScrollFactor(0).setDepth(1).setAlpha(0);
          this.malpelo_txt_2 = this.add.image(1280/2-100, 720/2-100, "malpelo_txt").setScale(0.4).setOrigin(0, 0).setScrollFactor(0).setDepth(1).setAlpha(0);
          this.start_txt = this.add.image(1280/2, 650, "start_txt").setScale(0.8).setOrigin(0.5, 0).setScrollFactor(0).setDepth(1).setAlpha(0);

          this.time.addEvent({
            delay: 2000,
            callback: ()=>{
              console.log("PRIMO TESTO 2000ms")
              this.tweens.add({
                targets: this.malpelo_txt_1,
                alpha: 1,
                duration: 3000,
                repeat: false
              });
            },
            loop: false
          })
          this.time.addEvent({
            delay: 3000,
            callback: ()=>{
              console.log("SECONDO TESTO 5000ms")
              this.tweens.add({
                targets: this.malpelo_txt_2,
                alpha: 1,
                duration: 3000,
                repeat: false
              });
            },
            loop: false
          })
          this.time.addEvent({
            delay: 7000,
            callback: ()=>{
              this.tweens.add({
                targets: this.start_txt,
                alpha: 1,
                duration: 500,
                repeat: false
              });
            },
            loop: false
          })

      update(){
      }
    }

    }
