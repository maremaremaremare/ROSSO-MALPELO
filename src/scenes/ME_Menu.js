let flag;
export default class SceneWelcome extends Phaser.Scene {

      background;        // oggetto relativo all'elemento "sfondo"

      constructor(){
  		    super("SceneMenu");
      }

      init(data){
          console.log("scene_MENU - Executing init()");
          console.log('ID', data.id);
          flag=data.id;
      }

      preload() {
          console.log("scene_MENU - Executing preload()");

          this.load.image("background_menu", "assets/MENU/home.jpg"); // carica l'immagine di sfond
          this.load.image("play_button", "assets/MENU/play_button.png");// Carica bottone PLAYE
          this.load.image("crediti_button", "assets/MENU/crediti_button.png");
          this.load.image("storia_button", "assets/MENU/storia_button.png");
          this.load.image("play_hover", "assets/MENU/glow_gioca.png");// Carica bottone PLAYE
          this.load.image("crediti_hover", "assets/MENU/glow_crediti.png");
          this.load.image("storia_hover", "assets/MENU/glow_storia.png");



      }

      create() {
        //RELOAD
          if(flag==1){
            window.location.reload();
            console.log("RELOAD");
          }


          console.log("scene_MENU - Executing create()");
          // Posizioniamo gli elementi nella scena
          this.background = this.add.image(0, 0, "background_menu").setOrigin(0,0);
          this.play_hover = this.add.image(0, 0, "play_hover").setOrigin(0,0).setAlpha(0);
          this.crediti_hover = this.add.image(0, 0, "crediti_hover").setOrigin(0,0).setAlpha(0);
          this.storia_hover = this.add.image(0, 0, "storia_hover").setOrigin(0,0).setAlpha(0);


          //creo una immagine per il bottone. NB NON SEGUITE I TUTORIAL PER PHASER2, è stata completamente cambiata e non funzionano più
          this.playbutton = this.add.image(this.game.config.width/5+70, this.game.config.height/3+240, "play_button").setScale(0.6).setOrigin(0.5, 0.5).setAlpha(1); //imposta l'immagine in modo che possa essere cliccata
          this.storiabutton = this.add.image(this.game.config.width/5-10, this.game.config.height/3+147, "storia_button").setScale(0.57).setOrigin(0.5, 0.5).setAlpha(1); //imposta l'immagine in modo che possa essere cliccata
          this.creditibutton = this.add.image(this.game.config.width/5, this.game.config.height/3+350, "crediti_button").setScale(0.6).setOrigin(0.5, 0.5).setAlpha(1); //imposta l'immagine in modo che possa essere cliccata

          this.physics.add.existing(this.playbutton, true);
          this.physics.add.existing(this.storiabutton, true);
          this.physics.add.existing(this.creditibutton, true);

          this.playbutton.setInteractive();
          this.storiabutton.setInteractive();
          this.creditibutton.setInteractive();

          this.time.addEvent({
            delay: 4000,
            startAt:1000,
            callback: () => {
              this.tweens.add({
                targets: this.play_hover,
                alpha: 1,
                duration: 2000,
                repeat: false
              });
            },
            loop: true
          });

          this.time.addEvent({
            delay: 4000,
            callback: () => {
              this.tweens.add({
                targets: this.play_hover,
                alpha: 0,
                duration: 2000,
                repeat: false
              });
            },
            loop: true
          });

          this.time.addEvent({
            delay: 4000,
            startAt:1400,
            callback: () => {
              this.tweens.add({
                targets: this.storia_hover,
                alpha: 1,
                duration: 2000,
                repeat: false
              });
            },
            loop: true
          });

          this.time.addEvent({
            delay: 4500,
            callback: () => {
              this.tweens.add({
                targets: this.storia_hover,
                alpha: 0,
                duration: 2000,
                repeat: false
              });
            },
            loop: true
          });


          this.time.addEvent({
            delay: 3400,
            startAt:1900,
            callback: () => {
              this.tweens.add({
                targets: this.crediti_hover,
                alpha: 1,
                duration: 2000,
                repeat: false
              });
            },
            loop: true
          });

          this.time.addEvent({
            delay: 3800,
            callback: () => {
              this.tweens.add({
                targets: this.crediti_hover,
                alpha: 0,
                duration: 2000,
                repeat: false
              });
            },
            loop: true
          });



          this.playbutton.on("pointerdown", ()=>{ //quando viene clickato il bottone succedono cose
              console.log("BOTTONE START PREMUTO");
              this.scene.start("SceneWelcome");
          });
          this.storiabutton.on("pointerdown", ()=>{ //quando viene clickato il bottone succedono cose
              console.log("BOTTONE STORIA PREMUTO");
              this.scene.start("SceneStoria");
          });
          this.creditibutton.on("pointerdown", ()=>{ //quando viene clickato il bottone succedono cose
              console.log("BOTTONE CREDITI PREMUTO");
              this.scene.start("SceneCrediti");
          });


      }

      update(){



      }




}
