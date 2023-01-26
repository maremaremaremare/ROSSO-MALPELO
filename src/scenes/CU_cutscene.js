var keySpace;

export default class SceneCutscene extends Phaser.Scene {


      constructor(){
        super("SceneCutscene");
      }

      init(){
          console.log("SceneCutscene - Executing init()");
      }

      preload() {
          console.log("SceneCutscene - Executing preload()");
          this.load.image("freccia", "assets/HUD/freccia.png");
          this.load.image('comandi', 'assets/HUD/Comandi.png');
          this.load.image('DIALOGO_Malpelo_Buio', 'assets/DIALOGHI/DIALOGO_Malpelo_Buio.png');
          this.load.image('DIALOGO_Malpelo_2', 'assets/DIALOGHI/DIALOGO_Malpelo_2.png');
          this.load.image('DIALOGO_Malpelo_3', 'assets/DIALOGHI/DIALOGO_Malpelo_3.png');
          this.load.image('DIALOGO_Ranocchio_0', 'assets/DIALOGHI/DIALOGO_Ranocchio_0.png');
          this.load.image('DIALOGO_Ranocchio_1', 'assets/DIALOGHI/DIALOGO_Ranocchio_1.png');
          this.load.image('DIALOGO_Ranocchio_2', 'assets/DIALOGHI/DIALOGO_Ranocchio_2.png');

      }

      create() {
          console.log("sceneCutscene - Executing create()");


          keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

          this.cameras.main.fadeIn(3000, 0, 0, 0)
          this.cameras.main.setZoom(1.2);
          this.cameras.main.centerOn(0, 0).setBackgroundColor('000000');
          this.cameras.main.shake(200, 0.005);

          this.DIALOGO_Malpelo_Buio = this.add.image(1280/2, 720/2, "DIALOGO_Malpelo_Buio").setOrigin(0.5, 0.5).setScale(0.835).setScrollFactor(0).setDepth(100).setAlpha(0);
          this.DIALOGO_Malpelo_2 = this.add.image(1280/2, 720/2, "DIALOGO_Malpelo_2").setOrigin(0.5, 0.5).setScale(0.835).setScrollFactor(0).setDepth(100).setAlpha(0);
          this.DIALOGO_Malpelo_3 = this.add.image(1280/2, 720/2, "DIALOGO_Malpelo_3").setOrigin(0.5, 0.5).setScale(0.835).setScrollFactor(0).setDepth(100).setAlpha(0);
          this.DIALOGO_Ranocchio_0 = this.add.image(1280/2, 720/2, "DIALOGO_Ranocchio_0").setOrigin(0.5, 0.5).setScale(0.835).setScrollFactor(0).setDepth(100).setAlpha(0);
          this.DIALOGO_Ranocchio_1 = this.add.image(1280/2, 720/2, "DIALOGO_Ranocchio_1").setOrigin(0.5, 0.5).setScale(0.835).setScrollFactor(0).setDepth(100).setAlpha(0);
          this.DIALOGO_Ranocchio_2 = this.add.image(1280/2, 720/2, "DIALOGO_Ranocchio_2").setOrigin(0.5, 0.5).setScale(0.835).setScrollFactor(0).setDepth(100).setAlpha(0);
          this.freccia = this.add.image(1200-100+13, 650-44, "freccia").setScale(0.042).setOrigin(0.5,0.5).setInteractive().setDepth(100).setScrollFactor(0).setAlpha(0);
          this.comandi = this.add.image(1280/2, 720/2-20, "comandi").setScale(0.8).setOrigin(0.5,0.5).setDepth(100).setScrollFactor(0).setAlpha(0);



          var timer0 = this.time.addEvent({
            delay: 1500,
            callback: ()=>{
              console.log("TIMER IN DIALOGO 1");
              this.tweens.add({
                targets: [this.DIALOGO_Malpelo_Buio,this.DIALOGO_Malpelo_2],
                alpha: 1,
                duration: 2000,
                repeat: false
              });

            },
            loop: false
          })

          var timer1 = this.time.addEvent({
            delay: 7000,
            callback: ()=>{
              console.log("TIMER OUT DIALOGO 1");
              this.tweens.add({
                targets: [this.DIALOGO_Malpelo_Buio,this.DIALOGO_Malpelo_2],
                alpha: 0,
                duration: 2000,
                repeat: false
              });

            },
            loop: false
          })

          var timer2 = this.time.addEvent({
            delay: 8500,
            callback: ()=>{
              console.log("TIMER IN DIALOGO 2");
              this.tweens.add({
                targets: [this.DIALOGO_Ranocchio_0, this.DIALOGO_Ranocchio_1],
                alpha: 1,
                duration: 2000,
                repeat: false
              });

            },
            loop: false
          })

          var timer3 = this.time.addEvent({
            delay: 13000,
            callback: ()=>{
              console.log("TIMER OUT DIALOGO 2");
              this.tweens.add({
                targets: [this.DIALOGO_Ranocchio_0, this.DIALOGO_Ranocchio_1],
                alpha: 0,
                duration: 2000,
                repeat: false
              });

            },
            loop: false
          })

          var timer4 = this.time.addEvent({
            delay: 14500,
            callback: ()=>{
              console.log("TIMER IN DIALOGO 3");
              this.tweens.add({
                targets: [this.DIALOGO_Malpelo_Buio,this.DIALOGO_Malpelo_3],
                alpha: 1,
                duration: 2000,
                repeat: false
              });

            },
            loop: false
          })

          var timer5 = this.time.addEvent({
            delay: 20000,
            callback: ()=>{
              console.log("TIMER OUT DIALOGO 3");
              this.tweens.add({
                targets: [this.DIALOGO_Malpelo_Buio,this.DIALOGO_Malpelo_3],
                alpha: 0,
                duration: 2000,
                repeat: false
              });

            },
            loop: false
          })


          var timer6 = this.time.addEvent({
            delay: 22500,
            callback: ()=>{
              console.log("TIMER IN DIALOGO 4");
              this.tweens.add({
                targets: [this.DIALOGO_Ranocchio_0, this.DIALOGO_Ranocchio_2],
                alpha: 1,
                duration: 2000,
                repeat: false
              });

            },
            loop: false
          })

          var timer7 = this.time.addEvent({
            delay: 28000,
            callback: ()=>{
              console.log("TIMER OUT DIALOGO 4");
              this.tweens.add({
                targets: [this.DIALOGO_Ranocchio_0, this.DIALOGO_Ranocchio_2],
                alpha: 0,
                duration: 2000,
                repeat: false
              });

            },
            loop: false
          })

          var timer8 = this.time.addEvent({
            delay: 29500,
            callback: ()=>{
              console.log("TIMER IN COMANDI ");
              this.tweens.add({
                targets: this.comandi,
                alpha: 1,
                duration: 2000,
                repeat: false
              });

            },
            loop: false
          })

          var timer9 = this.time.addEvent({
            delay: 33500,
            callback: ()=>{
              console.log("TIMER IN FRECCIA ");
              this.freccia.on("pointerdown", ()=>{
                  console.log("freccia premuta");
                  this.scene.start("SceneMiniera");
              });
              this.tweens.add({
                targets: this.freccia,
                alpha: 1,
                duration: 2000,
                repeat: false
              });

            },
            loop: false
          })







        }

      update() {
        if (keySpace.isDown)
        {
          console.log('PREMUTO SPAZIO');
          this.scene.start("SceneMiniera");
        }

      }


    }
