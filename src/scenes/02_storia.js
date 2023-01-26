
var k = 2;
var flag = "storia_1";
var flag_menu=1;
var flag_gioca=0;
var flag_testo=0;
var RESET=1;
var RESET_2=1;

export default class SceneStoria extends Phaser.Scene {


    constructor(){
      super("SceneStoria");
    }

    init(){
        console.log("SceneStoria - Executing init()");
        k = 2;
        flag = "storia_1";
        flag_menu=1;
        flag_gioca=0;
        flag_testo=0;
        RESET=1;
        RESET_2=1;

    }

    preload() {
        console.log("SceneStoria - Executing preload()");
        this.load.image("storia_1", "assets/RENDER/STORIA_1.png");
        this.load.image("storia_2", "assets/RENDER/STORIA_2.png");
        this.load.image("storia_3", "assets/RENDER/STORIA_3.png");
        this.load.image("freccia", "assets/HUD/freccia.png");
        this.load.image("gioca_button", "assets/HUD/gioca_button.png");// Carica bottone PLAY
        this.load.image("menu_button_small", "assets/HUD/menu_button_small.png");
        this.load.image("quit_button", "assets/HUD/quit_button.png");
        this.load.image("info_button", "assets/HUD/info_button.png");
        this.load.image("testo_scena1", "assets/HUD/testo_scena1.png");
        this.load.image("testo_scena2", "assets/HUD/testo_scena2.png");
        this.load.image("testo_scena3", "assets/HUD/testo_scena3.png");
    }

    create() {
        console.log("SceneStoria - Executing create()");
        this.testo_scena1 = this.add.image(0, 0, "testo_scena1").setScale(1).setOrigin(0, 0).setDepth(0);
        this.testo_scena2 = this.add.image(0, 0, "testo_scena2").setScale(1).setOrigin(0, 0).setDepth(0);
        this.testo_scena3 = this.add.image(0, 0, "testo_scena3").setScale(1).setOrigin(0, 0).setDepth(0);
        this.quit_button = this.add.image(44, 39, "quit_button").setScale(1).setOrigin(0, 0).setDepth(0).setInteractive();


        this.info_button = this.add.image(1132, 60, "info_button").setScale(0.9).setOrigin(0, 0).setDepth(100).setInteractive();
        this.info_button.on("pointerdown", ()=>{
            console.log("info premuto");
            flag_testo++;
            RESET = 1;
            console.log(flag_testo);
        });

          this.quit_button.on("pointerdown", ()=> {this.quitDialoghi()});

        this.freccia_dx = this.add.image(1200, 650, "freccia").setScale(0.05).setOrigin(0.5,0.5).setInteractive().setDepth(10);
        this.freccia_dx.on("pointerdown", ()=>{
            console.log("freccia_dx premuta");
            k++;
            RESET = 1;
            console.log(k);
            this.quitDialoghi();
        });

        this.freccia_sx = this.add.image(1280-1200, 650, "freccia").setScale(-0.05).setOrigin(0.5,0.5).setInteractive().setDepth(10);
        this.freccia_sx.on("pointerdown", ()=>{
            console.log("freccia_sx premuta");
            k--;
            RESET = 1;
            console.log(k);
            this.quitDialoghi();;
        });

        this.menu_button = this.add.image(50, 615, "menu_button_small").setScale(0.9).setOrigin(0, 0).setDepth(0).setInteractive();
        this.menu_button.on("pointerdown", ()=>{
            console.log("MENU premuto");
            k=2;
            this.menu_button.setDepth(0);
            this.gioca_button.setDepth(0);
            RESET=1;
            this.scene.start("SceneMenu", {id: 1});
        });

        this.gioca_button = this.add.image(1080, 615, "gioca_button").setScale(0.9).setOrigin(0, 0).setDepth(0).setInteractive();
        this.gioca_button.on("pointerdown", ()=>{
            console.log("MENU premuto");
            this.menu_button.setDepth(0);
            this.gioca_button.setDepth(0);
            this.scene.start("SceneWelcome");
            RESET=1;
        });
    }



    update(){

      if(flag_testo == 1 && RESET_2 && k==2){
        this.testo_scena1.setDepth(200);
        this.quit_button.setDepth(200);
        this.info_button.setDepth(0);
        RESET_2=0;
        flag_testo=0;
      } else if(flag_testo == 1 && RESET_2 && k==3){
        this.testo_scena2.setDepth(200);
        this.quit_button.setDepth(220).setX(1181).setY(290);
        this.info_button.setDepth(0);
        RESET_2=0;
        flag_testo=0;
      } else if(flag_testo == 1 && RESET_2 && k==4){
        this.testo_scena3.setDepth(200);
        this.quit_button.setDepth(220).setX(1181);
        this.info_button.setDepth(0);
        RESET_2=0;
        flag_testo=0;
      };


      if (k==1 && RESET){
        console.log("CASO_0");
        this.scene.start("SceneMenu", {id: 1});
        k=2;
        this.menu_button.setDepth(0);
        this.gioca_button.setDepth(0);
        RESET=1;
      } else if (k==2 && RESET) {
        console.log("CASO_1");
        flag="storia_1";
        this.storia = this.add.image(0, 0, flag).setScale(1).setOrigin(0, 0);
        this.gioca_button.setDepth(0);
        this.menu_button.setDepth(100)
        this.quit_button.setX(44).setY(39);
        RESET=0;
      } else if (k==3 && RESET){
        console.log("CASO_2");
        flag="storia_2";
        this.menu_button.setDepth(0);
        this.gioca_button.setDepth(0);
        this.quit_button.setX(1181).setY(290);
        this.storia = this.add.image(0, 0, flag).setScale(1).setOrigin(0, 0);
        RESET=0;
      } else if (k==4 && RESET){
        console.log("CASO_3");
        flag="storia_3";
        this.menu_button.setDepth(0);
        this.gioca_button.setDepth(100);
        this.quit_button.setX(1181).setY(39);
        this.storia = this.add.image(0, 0, flag).setScale(1).setOrigin(0, 0);
        RESET=0;
      } else if (k==5 && RESET){
        console.log("CASO_4");
        this.menu_button.setDepth(0);
        this.gioca_button.setDepth(0);
        this.scene.start("SceneCutscene");
        RESET=0;
      }

    }

    quitDialoghi() {
      this.testo_scena1.setDepth(-100);
      this.testo_scena2.setDepth(-100);
      this.testo_scena3.setDepth(-100);
      this.quit_button.setDepth(-100);
      this.info_button.setDepth(200);
      this.flag_testo=0;
      RESET_2=1;
    }

    destroy(){


    }



}
