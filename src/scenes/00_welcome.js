var map;
var fantasma,player_cutscene;
var cursors;
var groundLayer, oroLayer, zuppaLayer, minatorelayer;
var varco;
var n = 0;
var repeat = 0;
var k = 1;
var camzoom = 1;
var mal_x, mal_y;
var keySpace;
var flag_prosegui = false;

export default class SceneMenu extends Phaser.Scene {

      background;        // oggetto relativo all'elemento "sfondo"

      constructor(){
  		    super("SceneWelcome");
      }

      init(){
          console.log("scene_WELCOME - Executing init()");
          this.floorHeight = this.game.config.height - 30;
          this.worldWidth = 10000;
      }

      preload() {
        console.log("SceneWelcome- Executing preload()");

        // MAPPA JSON TILED
        this.load.tilemapTiledJSON('map', 'assets/MAPPA/map.JSON');

        // TILES DALLO SPRITESHEET: DA FIXARE
        this.load.spritesheet('tiles', 'assets/MAPPA/tiles.png', {frameWidth: 70, frameHeight: 70});


        // ATLAS CON ANIMAZIONI PLAYER
        this.load.image('player_cutscene', 'assets/NPC_OBJ/malpelo_0.png');

        //NPC E OBJ
        this.load.image('FANTASMA', 'assets/NPC_OBJ/FANTASMA.png');

        //SFONDI DIVISO 3 - QUI SOLO UNO
        this.load.image('SFONDO_MAIN_1', 'assets/SFONDI/SFONDO_MAIN_1.jpg');
        this.load.image('OVERLAY_1', 'assets/SFONDI/OVERLAY_1.png');
        this.load.image('SUPER_1', 'assets/SFONDI/OVERLAY_1.png');
        this.load.image('NUVOLE', 'assets/HUD_TOP/NUVOLE.png');

        // DIALOGUE box
        this.load.image('DIALOGO_Malpelo_Fuori', 'assets/DIALOGHI/DIALOGO_Malpelo_Fuori.png');
        this.load.image('DIALOGO_Malpelo_1', 'assets/DIALOGHI/DIALOGO_Malpelo_1.png');
        this.load.image('DIALOGO_Papa_Fuori', 'assets/DIALOGHI/DIALOGO_Papa_Fuori.png');
        //TXT
        this.load.image('DIALOGO_Papa_1', 'assets/DIALOGHI/DIALOGO_Papa_1.png');
        this.load.image('DIALOGO_Papa_2', 'assets/DIALOGHI/DIALOGO_Papa_2.png');
        this.load.image("freccia", "assets/HUD/freccia.png");


      }

      create() {
        console.log("SceneWelcome- Executing create()");
        //DELETE
        /* TIMER CONTATORE PER DEBUG
        var timer = this.time.addEvent({
          delay: 1000,
          callback: ()=>{
            console.log(k);
            k++
          },
          loop: true
        })
        */

        //FADE IN CAMERA E ZOOM PER DEBUG
        this.cameras.main.fadeIn(3000, 0, 0, 0)
        this.cameras.main.setZoom(1);
        this.cameras.main.centerOn(0, 0).setBackgroundColor('000000');

        //LOAD SFONDO (DIVISI IN TRE PER COMPATIBILTÀ CON FIREFOX) MA QUI SOLO UNO!
        this.sfondo = this.add.image(0, 0, "SFONDO_MAIN_1").setScale(1).setOrigin(0, 0).setDepth(1);
        this.overlay = this.add.image(0, 0, "OVERLAY_1").setScale(1).setOrigin(0, 0).setDepth(11);
        this.super = this.add.image(0, 0, "SUPER_1").setScale(1).setOrigin(0, 0).setDepth(15);

        //OVERLAY NUVOLE SOGNO
        this.nuvole = this.add.image(0, 0, "NUVOLE").setScale(1).setOrigin(0, 0).setScrollFactor(0).setDepth(50).setAlpha(0.8);

        //DIALOGO Malpelo
        this.DIALOGO_Malpelo_Fuori = this.add.image(1280/2, 720/2, "DIALOGO_Malpelo_Fuori").setOrigin(0.5, 0.5).setScale(0.835).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Malpelo_1 = this.add.image(1280/2, 720/2, "DIALOGO_Malpelo_1").setOrigin(0.5, 0.5).setScale(0.835).setScrollFactor(0).setDepth(100).setAlpha(0);


        //DIALOGO Papa
        this.DIALOGO_Papa_Fuori = this.add.image(1280/2, 720/2, "DIALOGO_Papa_Fuori").setOrigin(0.5, 0.5).setScale(0.835).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Papa_1 = this.add.image(1280/2, 720/2, "DIALOGO_Papa_1").setOrigin(0.5, 0.5).setScale(0.835).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Papa_2 = this.add.image(1280/2, 720/2, "DIALOGO_Papa_2").setOrigin(0.5, 0.5).setScale(0.835).setScrollFactor(0).setDepth(100).setAlpha(0);


        this.freccia = this.add.image(1200-100+13, 650-44, "freccia").setScale(0.042).setOrigin(0.5,0.5).setInteractive().setDepth(100).setScrollFactor(0).setAlpha(0);






        console.log("SceneWelcome- creo la mappa");
        // carica mappa
        map = this.make.tilemap({key: 'map'});

        // tile dell terreno
        var groundTiles = map.addTilesetImage('tiles');
        // crea livello terreno
        groundLayer = map.createDynamicLayer('World', groundTiles, 0, 0);
        // il player collide
        groundLayer.setCollisionByExclusion([-1]);

        // confini mondo come terreno
        this.physics.world.bounds.width = groundLayer.width;
        this.physics.world.bounds.height = groundLayer.height;

        //creo sprite fantasma
        var fantasma = this.add.image(560, 830, 'FANTASMA');
        fantasma.setScale(0.35);
        fantasma.setAngle(-20);
        //fantasma.setCollideWorldBounds(true);
        fantasma.setAlpha(0);
        fantasma.setDepth(14);

        //SPRITE PLAYER X ANIMAZIONI
        // creo lo sprite del player
        player_cutscene = this.physics.add.sprite(450, 930, 'player_cutscene');
        player_cutscene.setScale(0.5);
        player_cutscene.setBounce(0);
        player_cutscene.setDepth(13); // bounce dalle piattafomr
        player_cutscene.setCollideWorldBounds(true); // collide coi confini del mondo

        // collide con le tile
        this.physics.add.collider(groundLayer, player_cutscene);

        // per farlo più basso della tile
        player_cutscene.body.setSize(player_cutscene.width, player_cutscene.height-20);



        //timer

        //SALTO
        var timer = this.time.addEvent({
          delay: 5000+n,
          callback: ()=>{
            console.log("SECONDO TIMER (LOOP)");
            player_cutscene.body.setVelocityY(-150); //SALTO
            n=Phaser.Math.Between(4000, 7000); // RANDOM SALTO!
            console.log(n);       // PER DEBUG
            console.log(repeat);  //PER DEBUG
            repeat++;
            if (repeat==5) {
              timer.remove();
            }
          },
          loop: true
        })

        //VISIBILITÀ FANTASMA

        var timer2 = this.time.addEvent({
          delay: 2000,
          callback: ()=>{
            console.log("TIMER FANTASMA");
            var cam = this.cameras.main;
            cam.zoomTo(1.2, 1800);
            cam.shake(200, 0.005);
            this.tweens.add({
              targets: fantasma,
              alpha: 1,
              duration: 1500,
              repeat: false
            });

          },
          loop: false
        })

        // DIALOGHI

        var timer3 = this.time.addEvent({
          delay: 3500,
          callback: ()=>{
            console.log("TIMER IN DIALOGO 1");
            this.tweens.add({
              targets: [this.DIALOGO_Malpelo_Fuori,this.DIALOGO_Malpelo_1],
              alpha: 1,
              duration: 2000,
              repeat: false
            });

          },
          loop: false
        })

        var timer3 = this.time.addEvent({
          delay: 8000,
          callback: ()=>{
            console.log("TIMER OUT DIALOGO 2");
            this.tweens.add({
              targets: [this.DIALOGO_Malpelo_Fuori,this.DIALOGO_Malpelo_1],
              alpha: 0,
              duration: 1000,
              repeat: false
            });
          },
          loop: false
        })

        var timer4 = this.time.addEvent({
          delay: 8800,
          callback: ()=>{
            console.log("TIMER IN DIALOGO PAPA SFONDO");
            this.tweens.add({
              targets: [this.DIALOGO_Papa_Fuori, this.DIALOGO_Papa_1],
              alpha: 1,
              duration: 2000,
              repeat: false
            });
          },
          loop: false
        })

        var timer6 = this.time.addEvent({
          delay: 15800,
          callback: ()=>{
            console.log("TIMER OUT DIALOGO PAPA 1");
            this.tweens.add({
              targets: this.DIALOGO_Papa_1,
              alpha: 0,
              duration: 2000,
              repeat: false
            });
          },
          loop: false
        })

        var timer7 = this.time.addEvent({
          delay: 16600,
          callback: ()=>{
            console.log("TIMER in DIALOGO PAPA 2");
            this.tweens.add({
              targets: this.DIALOGO_Papa_2,
              alpha: 1,
              duration: 2000,
              repeat: false
            });
          },
          loop: false
        })

        var timer8 = this.time.addEvent({
          delay: 23600,
          callback: ()=>{
            console.log("TIMER OUT DIALOGO PAPA 2");
            this.tweens.add({
              targets: [this.DIALOGO_Papa_2,this.DIALOGO_Papa_Fuori],
              alpha: 0,
              duration: 2000,
              repeat: false
            });
          },
          loop: false
        })



          var timer10 = this.time.addEvent({
            delay: 25600,
            callback: ()=>{
              console.log("TIMER FRECCIA PER PROSEGUIRE");
              this.freccia.on("pointerdown", ()=>{
                  console.log("freccia premuta");
                  this.scene.start("SceneCutscene");
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

          //SU E GIU FANTASMA
          this.tweens.add({
            targets: fantasma,
            y: 860,
            duration: 2200,
            ease: 'linear',
            yoyo: true,
            repeat: -1
          });


        //this.player_cutscene.anims('walk', true);
        cursors = this.input.keyboard.createCursorKeys();

        // confini mondo
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        // la camera segue il player
        this.cameras.main.startFollow(player_cutscene,false,1,1,-70,0);
        //(oggetto, arrotonda pos a interi, velocità x, velocità y, OFFSET X!, offset Y)

        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      }

      update(){

        if (keySpace.isDown)
        {
          console.log('PREMUTO SPAZIO');
          this.scene.start("SceneCutscene");
        }

      }




}
