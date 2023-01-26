let num_min = 0;
let flag_ORO = 0;
let flag_ZUPPA = 0;

export default class SceneMiniera extends Phaser.Scene {

      constructor() {
          var groundTiles;
          var cursors;
          let keyboard;
          var map;
          var min_1, min_2, min_3, player;
          var groundLayer;

          var flag_min1 = 0;
          var flag_box_min1 = 1;
          var flag_dialogue_min1 = 1;

          var timer_M1_1;
          var timer_M1_2;

          var flag_min2 = 0;
          var flag_box_min2 = 1;
          var flag_dialogue_min2 = 1;

          var timer_M2_1;
          var timer_M2_2;

          var flag_min3 = 0;
          var flag_box_min3 = 1;
          var flag_dialogue_min3 = 1;

          var timer_M2_1;
          var timer_M2_2;

          var keySpace;
          var fantasma;



          var anim_min1;
          var anim_min2;
          var anim_min3;

          var flag_new_min2 = 0;



          super("SceneMiniera");
      }

      init() {
          console.log("SceneMiniera - Executing init()");
          this.floorHeight = this.game.config.height - 30;
          this.worldWidth = 10000;
      }

      preload() {
          console.log("SceneMiniera- Executing preload()");

          // MAPPA JSON TILED
          this.load.tilemapTiledJSON('map', 'assets/MAPPA/map.JSON');

          // TILES DALLO SPRITESHEET
          this.load.spritesheet('tiles', 'assets/MAPPA/tiles.png', {frameWidth: 70, frameHeight: 70});

          // ATLAS CON ANIMAZIONI PLAYER
          this.load.atlas('player', 'assets/spritesheet_malpelo_1.png', 'assets/sprites_malpelo_1.json');
          // ATLAS CON ANIMAZIONI MINATORI
          this.load.atlas('min_1', 'assets/spritesheet_min_1.png', 'assets/sprites_min_1.json');
          this.load.atlas('min_2', 'assets/spritesheet_min_2.png', 'assets/sprites_min_2.json');
          this.load.atlas('min_3', 'assets/spritesheet_min_3.png', 'assets/sprites_min_3.json');

          //NPC E OBJ
          this.load.image('FANTASMA', 'assets/NPC_OBJ/FANTASMA.png');
          this.load.image('ORO', 'assets/NPC_OBJ/ORO.png');
          this.load.image('ZUPPA', 'assets/NPC_OBJ/ZUPPA.png');

          //HUD
          this.load.image('ITEM_0', 'assets/HUD_TOP/ITEM_0.png');
          this.load.image('FOUND_ORO', 'assets/HUD_TOP/FOUND_ORO.png');
          this.load.image('FOUND_ZUPPA', 'assets/HUD_TOP/FOUND_ZUPPA.png');
          this.load.image('CASCO_0', 'assets/HUD_TOP/CASCO_0.png');
          this.load.image('FOUND_CASCO_1', 'assets/HUD_TOP/FOUND_CASCO_1.png');
          this.load.image('FOUND_CASCO_2', 'assets/HUD_TOP/FOUND_CASCO_2.png');
          this.load.image('PULSANTE_Oro', 'assets/HUD/PULSANTE_Sacco.png');
          this.load.image('PULSANTE_Zuppa', 'assets/HUD/PULSANTE_Zuppa.png')
          this.load.image('PULSANTE_Rifiuta', 'assets/HUD/PULSANTE_Rifiuta.png');
          this.load.image('PULSANTE_Fuggi', 'assets/HUD/PULSANTE_Fuggi.png')


          //HUD PAUSA

          this.load.image('pausa_menu_button', 'assets/HUD/PAUSA/pausa_menu_button.png')
          this.load.image('pausa_riprendi_button', 'assets/HUD/PAUSA/pausa_riprendi_button.png');
          this.load.image('pausa_button', 'assets/HUD/PAUSA/pausa_button.png');


          //OVERLAY
          this.load.image('LUCE', 'assets/HUD_TOP/LUCE_.png');
          this.load.image('PAUSA_NERO', 'assets/HUD_TOP/pausa_nero.png');

          //SFONDI DIVISO 3
          this.load.image('SFONDO_MAIN_1', 'assets/SFONDI/SFONDO_MAIN_1.jpg');
          this.load.image('SFONDO_MAIN_2', 'assets/SFONDI/SFONDO_MAIN_2.jpg');
          this.load.image('SFONDO_MAIN_3', 'assets/SFONDI/SFONDO_MAIN_3.jpg');
          this.load.image('OVERLAY_1', 'assets/SFONDI/OVERLAY_1.png');
          this.load.image('OVERLAY_2', 'assets/SFONDI/OVERLAY_2.png');
          this.load.image('OVERLAY_3', 'assets/SFONDI/OVERLAY_3.png');
          this.load.image('SUPER_1', 'assets/SFONDI/SUPER_1.png');
          this.load.image('SUPER_2', 'assets/SFONDI/SUPER_2.png');
          this.load.image('SUPER_3', 'assets/SFONDI/SUPER_3.png');

          //DIALOGHI
          this.load.image('DIALOGO_Papa_Miniera', 'assets/DIALOGHI/DIALOGO_Papa_Miniera.png');
          this.load.image('DIALOGO_Papa_4', 'assets/DIALOGHI/DIALOGO_Papa_4.png');
          this.load.image('DIALOGO_Papa_Win', 'assets/DIALOGHI/DIALOGO_Papa_Win.png');
          this.load.image('DIALOGO_Papa_GameOver', 'assets/DIALOGHI/DIALOGO_Papa_GameOver.png');

          this.load.image('DIALOGO_Patrizio', 'assets/DIALOGHI/DIALOGO_Patrizio.png');
          this.load.image('DIALOGO_Patrizio_1', 'assets/DIALOGHI/DIALOGO_Patrizio_1.png');
          this.load.image('DIALOGO_Patrizio_2', 'assets/DIALOGHI/DIALOGO_Patrizio_2.png');
          this.load.image('DIALOGO_Patrizio_3', 'assets/DIALOGHI/DIALOGO_Patrizio_3.png');
          this.load.image('DIALOGO_Patrizio_4', 'assets/DIALOGHI/DIALOGO_Patrizio_4.png');
          this.load.image('DIALOGO_Patrizio_Quest', 'assets/DIALOGHI/DIALOGO_Patrizio_Quest.png');

          this.load.image('DIALOGO_Massimo', 'assets/DIALOGHI/DIALOGO_Massimo.png');
          this.load.image('DIALOGO_Massimo_1', 'assets/DIALOGHI/DIALOGO_Massimo_1.png');
          this.load.image('DIALOGO_Massimo_2', 'assets/DIALOGHI/DIALOGO_Massimo_2.png');
          this.load.image('DIALOGO_Massimo_3', 'assets/DIALOGHI/DIALOGO_Massimo_3.png');
          this.load.image('DIALOGO_Massimo_4', 'assets/DIALOGHI/DIALOGO_Massimo_4.png');
          this.load.image('DIALOGO_Massimo_Quest', 'assets/DIALOGHI/DIALOGO_Massimo_Quest.png');

          this.load.image('DIALOGO_Christian', 'assets/DIALOGHI/DIALOGO_Christian.png');
          this.load.image('DIALOGO_Christian_1', 'assets/DIALOGHI/DIALOGO_Christian_1.png');
          this.load.image('DIALOGO_Christian_2', 'assets/DIALOGHI/DIALOGO_Christian_2.png');
          this.load.image('DIALOGO_Christian_3', 'assets/DIALOGHI/DIALOGO_Christian_3.png');

          this.load.image('DIALOGO_Malpelo_Luce', 'assets/DIALOGHI/DIALOGO_Malpelo_Luce.png');
          this.load.image('DIALOGO_Malpelo_4', 'assets/DIALOGHI/DIALOGO_Malpelo_4.png');
          this.load.image('DIALOGO_Malpelo_5', 'assets/DIALOGHI/DIALOGO_Malpelo_5.png');
          this.load.image('DIALOGO_Malpelo_6', 'assets/DIALOGHI/DIALOGO_Malpelo_6.png');
          this.load.image('DIALOGO_Malpelo_7', 'assets/DIALOGHI/DIALOGO_Malpelo_7.png');
          this.load.image('DIALOGO_Malpelo_8', 'assets/DIALOGHI/DIALOGO_Malpelo_8.png');
          this.load.image('DIALOGO_Malpelo_Fuggi', 'assets/DIALOGHI/DIALOGO_Malpelo_Fuggi.png');
          this.load.image('DIALOGO_Malpelo_Rifiuta', 'assets/DIALOGHI/DIALOGO_Malpelo_Rifiuta.png');

          //COLLIDER BOX
          this.load.image('BOX_MIN_1', 'assets/UTILS/BOX_MIN_1.png');

          this.cursors = this.input.keyboard.createCursorKeys();
          this.keyboard = this.input.keyboard;



      }

      create() {
        this.input.topOnly = true;
        this.events.on('win', this.handler_win, this);
        this.events.once('FOUND_CASCO_2', this.handler_CASCO_2, this);
        this.input.keyboard.enabled = false;
        //FADE IN CAMERA E ZOOM PER DEBUG
        this.time.addEvent({
          delay: 4000,
          callback: () => {
            this.input.keyboard.enabled = true
          }
        });

        this.luce = this.add.image(-230,-350, "LUCE");
        this.luce.setOrigin(0,0);
        this.luce.setScale(0.7);
        this.luce.setScrollFactor(0);
        this.luce.setAlpha(0);
        this.luce.setDepth(1.5);

        //FADE IN LUCE E ZOOM
        this.tweens.add({
          targets: this.luce,
          alpha: 0.9,
          duration: 2000,
          repeat: false
          })
        this.cameras.main.centerOn(0, 0).zoomTo(1.4, 2000);
        this.cameras.main.fadeIn(5000, 0, 0, 0)
        this.cameras.main.setZoom(1);


        //COLLIDER BOX
        this.BOX_MIN_1 = this.add.image(4150, 1400, "BOX_MIN_1").setOrigin(1, 1).setScale(1).setDepth(1).setAlpha(0);
        this.physics.add.existing(this.BOX_MIN_1, true);
        this.BOX_MIN_2 = this.add.image(5752, 1507, "BOX_MIN_1").setOrigin(1, 1).setScale(1).setDepth(1).setAlpha(0);
        this.physics.add.existing(this.BOX_MIN_2, true);
        this.BOX_MIN_3 = this.add.image(7793, 1717, "BOX_MIN_1").setOrigin(1, 1).setScale(1).setDepth(1).setAlpha(0);
        this.physics.add.existing(this.BOX_MIN_3, true);

        //OGGETTI
        this.ZUPPA = this.add.image(4228, 1847, "ZUPPA").setOrigin(1, 1).setScale(0.3).setDepth(1.26).setAlpha(1);
        this.ORO = this.add.image(7850, 1717, "ORO").setOrigin(1, 1).setScale(0.3).setDepth(1).setAlpha(1);
        // OK this.ORO = this.add.image(3350, 900, "ORO").setOrigin(1, 1).setScale(0.3).setDepth(1).setAlpha(1);
        this.physics.add.existing(this.ZUPPA, true);
        this.physics.add.existing(this.ORO, true);
        this.ORO.body.setSize(70,70);
        this.ZUPPA.body.setSize(70,70);

        //DIALOGHI PAPA
        this.DIALOGO_Papa_Miniera = this.add.image(1280/2, 720/2, "DIALOGO_Papa_Miniera").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Papa_4 = this.add.image(1280/2, 720/2, "DIALOGO_Papa_4").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Papa_Win = this.add.image(1280/2, 720/2, "DIALOGO_Papa_Win").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Papa_GameOver = this.add.image(1280/2, 720/2, "DIALOGO_Papa_GameOver").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);

        //DIALOGHI PATRIZIO
        this.DIALOGO_Patrizio = this.add.image(1280/2, 720/2, "DIALOGO_Patrizio").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Patrizio_1 = this.add.image(1280/2, 720/2, "DIALOGO_Patrizio_1").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Patrizio_2 = this.add.image(1280/2, 720/2, "DIALOGO_Patrizio_2").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Patrizio_3 = this.add.image(1280/2, 720/2, "DIALOGO_Patrizio_3").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Patrizio_4 = this.add.image(1280/2, 720/2, "DIALOGO_Patrizio_4").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Patrizio_Quest = this.add.image(1280/2, 720/2, "DIALOGO_Patrizio_Quest").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(101).setAlpha(0);

        //DIALOGHI MASSIMO
        this.DIALOGO_Massimo = this.add.image(1280/2, 720/2, "DIALOGO_Massimo").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Massimo_1 = this.add.image(1280/2, 720/2, "DIALOGO_Massimo_1").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Massimo_2 = this.add.image(1280/2, 720/2, "DIALOGO_Massimo_2").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Massimo_3 = this.add.image(1280/2, 720/2, "DIALOGO_Massimo_3").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Massimo_4 = this.add.image(1280/2, 720/2, "DIALOGO_Massimo_4").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Massimo_Quest = this.add.image(1280/2, 720/2, "DIALOGO_Massimo_Quest").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);

        //DIALOGHI CHRIS
        this.DIALOGO_Christian = this.add.image(1280/2, 720/2, "DIALOGO_Christian").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Christian_1 = this.add.image(1280/2, 720/2, "DIALOGO_Christian_1").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Christian_2 = this.add.image(1280/2, 720/2, "DIALOGO_Christian_2").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Christian_3 = this.add.image(1280/2, 720/2, "DIALOGO_Christian_3").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);

        //DIALOGHI MALPELO
        this.DIALOGO_Malpelo_Luce = this.add.image(1280/2, 720/2, "DIALOGO_Malpelo_Luce").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Malpelo_4 = this.add.image(1280/2, 720/2, "DIALOGO_Malpelo_4").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Malpelo_5 = this.add.image(1280/2, 720/2, "DIALOGO_Malpelo_5").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Malpelo_6 = this.add.image(1280/2, 720/2, "DIALOGO_Malpelo_6").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Malpelo_7 = this.add.image(1280/2, 720/2, "DIALOGO_Malpelo_7").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Malpelo_8 = this.add.image(1280/2, 720/2, "DIALOGO_Malpelo_8").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Malpelo_Fuggi = this.add.image(1280/2, 720/2, "DIALOGO_Malpelo_Fuggi").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);
        this.DIALOGO_Malpelo_Rifiuta = this.add.image(1280/2, 720/2, "DIALOGO_Malpelo_Rifiuta").setOrigin(0.5, 0.5).setScale(0.73).setScrollFactor(0).setDepth(100).setAlpha(0);

        //LOAD SFONDO (DIVISI IN TRE PER COMPATIBILTÀ CON FIREFOX)
        this.sfondo = this.add.image(0, 0, "SFONDO_MAIN_1").setScale(1).setOrigin(0, 0);
        this.sfondo = this.add.image(3057, 0, "SFONDO_MAIN_2").setScale(1).setOrigin(0, 0);
        this.sfondo = this.add.image(3057*2-1, 0, "SFONDO_MAIN_3").setScale(1).setOrigin(0, 0);
        //LOAD OVERLAY (NUOVE TILES)
        this.overlay_1 = this.add.image(0, 0, "OVERLAY_1").setScale(1).setOrigin(0, 0).setDepth(1.2);
        this.overlay_2= this.add.image(3057, 0, "OVERLAY_2").setScale(1).setOrigin(0, 0).setDepth(1.2);
        this.overlay_3 = this.add.image(3057*2-1, 0, "OVERLAY_3").setScale(1).setOrigin(0, 0).setDepth(1.2);
        //LOAD SUPER (SOPRA TUTTO)
        this.super_1 = this.add.image(0, 0, "SUPER_1").setScale(1).setOrigin(0, 0).setDepth(1.25);
        this.super_2= this.add.image(3057, 0, "SUPER_2").setScale(1).setOrigin(0, 0).setDepth(1.25);
        this.super_3 = this.add.image(3057*2-1, 0, "SUPER_3").setScale(1).setOrigin(0, 0).setDepth(1.25);

        //HUD
        this.PULSANTE_Zuppa = this.add.image(470, 570, "PULSANTE_Zuppa").setOrigin(0.5, 0.5).setScale(0.6).setScrollFactor(0).setDepth(300).setAlpha(0).setInteractive();
        this.PULSANTE_Oro = this.add.image(475, 570, "PULSANTE_Oro").setOrigin(0.5, 0.5).setScale(0.6).setScrollFactor(0).setDepth(400).setAlpha(0).setInteractive();
        this.PULSANTE_Rifiuta = this.add.image(778, 530, "PULSANTE_Rifiuta").setOrigin(0.5, 0.5).setScale(0.7).setScrollFactor(0).setDepth(300).setAlpha(0).setInteractive();
        this.PULSANTE_Fuggi = this.add.image(502, 530, "PULSANTE_Fuggi").setOrigin(0.5, 0.5).setScale(0.7).setScrollFactor(0).setDepth(400).setAlpha(0).setInteractive();

        //HUD PAUSA
        this.PAUSA_NERO = this.add.image(0,0, "PAUSA_NERO").setOrigin(0, 0).setScale(1).setScrollFactor(0).setDepth(300).setAlpha(0);

        this.PULSANTE_Pausa_Menu = this.add.image(1280/2, 720/2+55, "pausa_menu_button").setOrigin(0.5, 0.5).setScale(0.6).setScrollFactor(0).setDepth(400).setAlpha(0).setInteractive();
        this.PULSANTE_Pausa_Riprendi = this.add.image(1280/2, 720/2-55, "pausa_riprendi_button").setOrigin(0.5, 0.5).setScale(0.6).setScrollFactor(0).setDepth(300).setAlpha(0).setInteractive();
        this.PULSANTE_Pausa_Button = this.add.image(1280/2, 137, "pausa_button").setOrigin(0.5, 0).setScale(0.6).setScrollFactor(0).setDepth(400).setAlpha(0).setInteractive();

        this.events.on('PAUSA', this.handler_pausa, this);

        this.PULSANTE_Pausa_Button.on("pointerdown", ()=>{
            console.log("PAUSA premuto");
            this.events.emit('PAUSA');

        });

        //COMPARE HUD
        this.time.addEvent({
        delay: 4200,
            callback: ()=>{
                this.caschi = this.add.image(220, 130, "CASCO_0")
                .setOrigin(0,0)
                .setScale(0.05)
                .setScrollFactor(0)
                .setDepth(2);
                this.item = this.add.image(955, 130, "ITEM_0")
                .setOrigin(0,0)
                .setScale(0.05)
                .setScrollFactor(0)
                .setDepth(2);
                this.PULSANTE_Pausa_Button.setAlpha(1);
            },
            loop: false
        })

        //BUILD
        console.log("SceneMiniera- creo la mappa");
        // carica mappa
        this.map = this.make.tilemap({key: 'map'});
        console.log("SceneMiniera- Executing create()");
        // tile dell terreno
        this.groundTiles = this.map.addTilesetImage('tiles');
        // crea livello terreno
        this.groundLayer = this.map.createDynamicLayer('World', this.groundTiles, 0, 0);
        // il player collide
        this.groundLayer.setCollisionByExclusion([-1]);
        //FINE BUILD

        // confini mondo come terreno
        this.physics.world.bounds.width = this.groundLayer.width;
        this.physics.world.bounds.height = this.groundLayer.height;


        //CREO ANIMAZIONI DA SPRITE

        //PLAYER
        // animazione di cammino
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('player', {prefix: 'sprite', start: 1, end: 14, zeroPad: 1}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'idle',
            frames: [{key: 'player', frame: 'sprite1'}],
            frameRate: 20,
        });

        //MIN 1
        this.anim_min1 = this.anims.create({
            key: 'walk_min1',
            frames: this.anims.generateFrameNames('min_1', {prefix: 'sprite', start: 3, end: 14, zeroPad: 1}),
            frameRate: 5,
            repeat: -1
        });
        this.anim_min1 = this.anims.create({
            key: 'idle_min1',
            frames: [{key: 'min_1', frame: 'sprite3'}],
            frameRate: 20,
        });
        //MIN 2
        this.anim_min2 = this.anims.create({
            key: 'walk_min2',
            frames: this.anims.generateFrameNames('min_2', {prefix: 'sprite', start: 3, end: 14, zeroPad: 1}),
            frameRate: 5,
            repeat: -1
        });
        this.anim_min2 = this.anims.create({
            key: 'idle_min2',
            frames: [{key: 'min_2', frame: 'sprite3'}],
            frameRate: 20,
        });

        //MIN 3
        this.anim_min3 = this.anims.create({
            key: 'walk_min3',
            frames: this.anims.generateFrameNames('min_3', {prefix: 'sprite', start: 3, end: 14, zeroPad: 1}),
            frameRate: 5,
            repeat: -1
        });
        this.anim_min3 = this.anims.create({
            key: 'idle_min3',
            frames: [{key: 'min_3', frame: 'sprite3'}],
            frameRate: 20,
        });

        //CREO SPRITE MINATORI
        //MIN 1
        this.min_1 = this.physics.add.sprite(4000, 1269, 'min_1')
        .setScale(0.4)
        .setBounce(0)
        .setDepth(1)
        .setCollideWorldBounds(true); // collide coi confini del mondo
        // collide con le tile
        this.physics.add.collider(this.groundLayer, this.min_1);

        //MIN 1 CAMMINO
        this.timer_M1_1 = this.time.addEvent({
          delay: 4000,
          startAt:2000,
          callback: () => {
              this.min_1.flipX = true
              this.min_1.setVelocityX(20);
              this.min_1.play('walk_min1', true);
          },
          loop: true
        });

        this.timer_M1_2 = this.time.addEvent({
          delay: 4000,
          callback: () => {
              this.min_1.flipX = false;
              this.min_1.setVelocityX(-20);
              this.min_1.play('walk_min1', true);
          },
          loop: true
        });

        //MIN 2
        this.min_2 = this.physics.add.sprite(5652, 1307, 'min_2')
        .setScale(0.4)
        .setBounce(0)
        .setDepth(1)
        .setCollideWorldBounds(true); // collide coi confini del mondo
        // collide con le tile
        this.physics.add.collider(this.groundLayer, this.min_2);

        //MIN 2 CAMMINO
        this.timer_M2_1 = this.time.addEvent({
          delay: 4000,
          startAt:2000,
          callback: () => {
              this.min_2.flipX = true
              this.min_2.setVelocityX(25);
              this.min_2.play('walk_min2', true);
          },
          loop: true
        });

        this.timer_M2_2 = this.time.addEvent({
          delay: 4000,
          callback: () => {
              this.min_2.flipX = false;
              this.min_2.setVelocityX(-25);
              this.min_2.play('walk_min2', true);
          },
          loop: true
        });

        //MIN 3
        this.min_3 = this.physics.add.sprite(7650, 1317, 'min_3')
        .setScale(0.4)
        .setBounce(0)
        .setDepth(1)
        .setCollideWorldBounds(true); // collide coi confini del mondo
        // collide con le tile
        this.physics.add.collider(this.groundLayer, this.min_3);

        //MIN 2 CAMMINO
        this.timer_M3_1 = this.time.addEvent({
          delay: 4000,
          startAt:2000,
          callback: () => {
              this.min_3.flipX = true
              this.min_3.setVelocityX(25);
              this.min_3.play('walk_min3', true);
          },
          loop: true
        });

        this.timer_M3_2 = this.time.addEvent({
          delay: 4000,
          callback: () => {
              this.min_3.flipX = false;
              this.min_3.setVelocityX(-25);
              this.min_3.play('walk_min3', true);
          },
          loop: true
        });



        //FANTASMA
        this.fantasma = this.add.image(2800, 920, 'FANTASMA').setScale(0.25).setAngle(15).setAlpha(1);
        this.fantasma.flipX = true;
        this.physics.add.existing(this.fantasma, true);

        this.tweens.add({
          targets: this.fantasma,
          y: 905,
          duration: 2200,
          ease: 'linear',
          yoyo: true,
          repeat: -1
        });

        //handler
        this.events.once('ORO', this.handler_ORO, this);
        this.events.once('ZUPPA', this.handler_ZUPPA, this);

        // PLAYER

        // SPAWN TEST MIN 3 this.player = this.physics.add.sprite(7403, 1417, 'player')
        // SPAWN TEST MIN 2 this.player = this.physics.add.sprite(5502, 1307, 'player')




        //SPAWN GIUSTO
        this.player = this.physics.add.sprite(3000, 900, 'player')
        .setScale(0.40)
        .setBounce(0)
        .setDepth(1.22)
        .setCollideWorldBounds(true); // collide coi confini del mondo
        // collide con le tile
        this.physics.add.collider(this.groundLayer, this.player);
        // per farlo più basso della tile
        this.player.body.setSize(this.player.width, this.player.height-20);

        //COLLIDER ORO
        this.physics.add.overlap(this.ORO, this.player, ()=>{
          //this.events.emit('ORO');
        });

        //COLLIDER ZUPPA
        this.physics.add.overlap(this.ZUPPA, this.player, ()=>{
          this.events.emit('ZUPPA');
        });

        //COLLIDER MIN 1
        this.events.on('min_1', this.handler_min_1, this);
        this.events.on('dialog_min_1', this.handler_dialog_min_1, this);

        this.physics.add.overlap(this.player, this.BOX_MIN_1, ()=>{
            this.events.emit('min_1');
            this.events.emit('dialog_min_1');
          });

        //COLLIDER MIN 2
        this.events.on('min_2', this.handler_min_2, this);
        this.events.on('dialog_min_2', this.handler_dialog_min_2, this);

        this.physics.add.overlap(this.player, this.BOX_MIN_2, ()=>{
            this.events.emit('min_2');
            this.events.emit('dialog_min_2');
          });

        //COLLIDER MIN 3
        this.events.on('min_3', this.handler_min_3, this);
        this.events.on('dialog_min_3', this.handler_dialog_min_3, this);

        this.physics.add.overlap(this.player, this.BOX_MIN_3, ()=>{
            this.events.emit('min_3');
            //this.events.emit('ORO');
            this.events.emit('dialog_min_3');
          });


        //COLLIDER FANTASMA
        this.physics.add.collider(this.fantasma, this.player, ()=>{
          console.log("TOCCATO FANTASMA")
          this.tweens.add({
            targets: [this.DIALOGO_Papa_Miniera, this.DIALOGO_Papa_4],
            alpha: 1,
            duration: 1500,
            repeat: false
          });
          this.time.addEvent({
          delay: 3000,
              callback: ()=>{
                this.tweens.add({
                  targets: [this.DIALOGO_Papa_Miniera, this.DIALOGO_Papa_4],
                  alpha: 0,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false
          })

        });



        // animazione di cammino
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('player', {prefix: 'sprite', start: 1, end: 14, zeroPad: 1}),
            frameRate: 10,
            repeat: 0
        });
        // non animazione immobile
        this.anims.create({
            key: 'idle',
            frames: [{key: 'player', frame: 'sprite16'}],
            frameRate: 20,
        });


        // confini mondo
        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
        // la camera segue il player
        this.cameras.main.startFollow(this.player);

      }

      update() {

        //console.log(this.player.body.x,this.player.body.y);
        if (this.keyboard.checkDown(this.keyboard.addKey('LEFT')))
        {
            this.player.body.setVelocityX(-200);
            this.player.anims.play('walk', true); // cammina a sx
            this.player.flipX = true; // simmetria
        }
        else if (this.keyboard.checkDown(this.keyboard.addKey('RIGHT')))
        {
            this.player.body.setVelocityX(200);
            this.player.anims.play('walk', true);
            this.player.flipX = false; // cammina a destra
        } else {
            this.player.body.setVelocityX(0);
            this.player.anims.play('idle', true);
        }
        // salta
        if (this.cursors.up.isDown && this.player.body.onFloor())
        {
            this.player.body.setVelocityY(-400);
        }


      }

      handler_ORO() {
        flag_ORO = 1;
        this.FOUND_ORO = this.add.image(955, 130, "FOUND_ORO")
        .setOrigin(0,0)
        .setScale(0.05)
        .setScrollFactor(0)
        .setAlpha(0)
        .setDepth(2);
        console.log("ORO PRESO")
        this.tweens.add({
          targets: this.ORO,
          alpha: 0,
          duration: 500,
          repeat: false
        });
        this.tweens.add({
          targets: this.FOUND_ORO,
          alpha: 1,
          duration: 500,
          repeat: false
        });
}

      handler_ZUPPA() {
          flag_ZUPPA = 1;
          this.FOUND_ZUPPA = this.add.image(955, 130, "FOUND_ZUPPA")
          .setOrigin(0,0)
          .setScale(0.05)
          .setScrollFactor(0)
          .setAlpha(0)
          .setDepth(2);
          console.log("ZUPPA PRESA")
          this.tweens.add({
            targets: this.ZUPPA,
            alpha: 0,
            duration: 500,
            repeat: false
          });
          this.tweens.add({
            targets: this.FOUND_ZUPPA,
            alpha: 1,
            duration: 500,
            repeat: false
          });

      }

      handler_min_1(){
        console.log("min 1 toccato");

        this.tweens.add({
        targets: [this.DIALOGO_Massimo,
                  this.DIALOGO_Massimo_1,
                  this.DIALOGO_Massimo_2,
                  this.DIALOGO_Massimo_3,
                  this.DIALOGO_Massimo_4,
                  this.DIALOGO_Patrizio_Quest,
                  this.DIALOGO_Malpelo_6,
                  this.DIALOGO_Malpelo_6,
                  this.PULSANTE_Oro
                ],
        alpha: 0,
        duration: 1500,
        repeat: false
      });

        this.min_1.setVelocityX(0);
        this.min_1.play('idle_min1', true);

        if (this.player.body.x>this.min_1.body.x) {
            this.min_1.flipX = true;
        } else {
          this.min_1.flipX = false;
        }

      }

      handler_dialog_min_1(){
        this.PULSANTE_Pausa_Button.setAlpha(0);
        this.player.setVelocityX(0);
        this.events.off('dialog_min_1', this.handler_dialog_min_1);
        this.time.addEvent({
        delay: 27000,
            callback: ()=>{

              this.events.on('dialog_min_1', this.handler_dialog_min_1_quest, this);
            },
            loop: false

        })

          this.tweens.add({
            targets: [this.DIALOGO_Malpelo_Luce, this.DIALOGO_Malpelo_4],
            alpha: 1,
            duration: 1500,
            repeat: false
          });

          this.time.addEvent({
          delay: 3000,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Malpelo_Luce, this.DIALOGO_Malpelo_4],
                  alpha: 0,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 4500,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Patrizio, this.DIALOGO_Patrizio_1],
                  alpha: 1,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 7500,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Patrizio, this.DIALOGO_Patrizio_1],
                  alpha: 0,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 8500,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Malpelo_Luce, this.DIALOGO_Malpelo_5],
                  alpha: 1,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 11500,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Malpelo_Luce, this.DIALOGO_Malpelo_5],
                  alpha: 0,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 13000,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Patrizio, this.DIALOGO_Patrizio_2],
                  alpha: 1,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 16000,
              callback: ()=>{
                  this.tweens.add({
                  targets: this.DIALOGO_Patrizio_2,
                  alpha: 0,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 18500,
              callback: ()=>{
                  this.tweens.add({
                  targets: this.DIALOGO_Patrizio_3,
                  alpha: 1,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 21500,
              callback: ()=>{
                  this.PULSANTE_Pausa_Button.setAlpha(1);
                  this.tweens.add({
                  targets: [this.DIALOGO_Patrizio, this.DIALOGO_Patrizio_3],
                  alpha: 0,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })


      }

      handler_dialog_min_1_quest(){

        if (flag_ZUPPA==1) {
          this.events.off('dialog_min_1', this.handler_dialog_min_1_quest, this);
          this.PULSANTE_Pausa_Button.setAlpha(0);
          this.tweens.add({
          targets: [this.DIALOGO_Patrizio, this.DIALOGO_Patrizio_Quest,this.PULSANTE_Zuppa],
          alpha: 1,
          duration: 1500,
          repeat: false
        });

        this.PULSANTE_Zuppa.on("pointerdown", ()=>{
            console.log("ZUPPA DATA");
            this.events.once('FOUND_CASCO_1', this.handler_CASCO_1, this);
            this.events.emit('FOUND_CASCO_1');
            this.tweens.add({
            targets: [this.DIALOGO_Patrizio_Quest, this.PULSANTE_Zuppa],
            alpha: 0,
            duration: 1500,
            repeat: false
          });

          this.time.addEvent({
          delay: 1500,
              callback: ()=>{
                this.tweens.add({
                targets: this.DIALOGO_Patrizio_4,
                alpha: 1,
                duration: 1500,
                repeat: false
              });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 5000,
              callback: ()=>{
                this.PULSANTE_Pausa_Button.setAlpha(1);
                this.flag_min1=1;
                this.tweens.add({
                targets: [this.DIALOGO_Patrizio, this.DIALOGO_Patrizio_4],
                alpha: 0,
                duration: 1500,
                repeat: false
              });
              },
              loop: false

          })


        });


        } else {

          this.tweens.add({
          targets: [this.DIALOGO_Patrizio, this.DIALOGO_Patrizio_Quest],
          alpha: 1,
          duration: 1500,
          repeat: false
        });

        this.time.addEvent({
        delay: 300,
            callback: ()=>{
                this.tweens.add({
                targets: [this.DIALOGO_Patrizio, this.DIALOGO_Patrizio_Quest],
                alpha: 0,
                duration: 1500,
                repeat: false
              });
            },
            loop: false

        })



        }

      }

      handler_min_2(){
        console.log("min 2 toccato");

        this.tweens.add({
        targets: [this.DIALOGO_Patrizio,
                  this.DIALOGO_Patrizio_1,
                  this.DIALOGO_Patrizio_2,
                  this.DIALOGO_Patrizio_3,
                  this.DIALOGO_Patrizio_Quest,
                  this.DIALOGO_Malpelo_4,
                  this.DIALOGO_Malpelo_5,
                  this.PULSANTE_Zuppa
                ],
        alpha: 0,
        duration: 1500,
        repeat: false
      });

        this.min_2.setVelocityX(0);
        this.min_2.play('idle_min2', true);

        if (this.player.body.x>this.min_2.body.x) {
            this.min_2.flipX = true;
        } else {
          this.min_2.flipX = false;
        }

      }

      handler_dialog_min_2(){
        this.PULSANTE_Pausa_Button.setAlpha(0);
        this.events.off('dialog_min_2', this.handler_dialog_min_2);
        this.time.addEvent({
        delay: 35000,
            callback: ()=>{
              this.events.on('dialog_min_2', this.handler_dialog_min_2_quest, this);
            },
            loop: false

        })

          this.tweens.add({
            targets: [this.DIALOGO_Massimo, this.DIALOGO_Massimo_1],
            alpha: 1,
            duration: 1500,
            repeat: false
          });

          this.time.addEvent({
          delay: 3000,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Massimo, this.DIALOGO_Massimo_1],
                  alpha: 0,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 4500,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Malpelo_Luce, this.DIALOGO_Malpelo_6],
                  alpha: 1,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 7500,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Malpelo_Luce, this.DIALOGO_Malpelo_6],
                  alpha: 0,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 8500,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Massimo, this.DIALOGO_Massimo_2],
                  alpha: 1,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 11500,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Massimo, this.DIALOGO_Massimo_2],
                  alpha: 0,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 13000,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Malpelo_Luce, this.DIALOGO_Malpelo_7],
                  alpha: 1,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 16000,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Malpelo_Luce, this.DIALOGO_Malpelo_7],
                  alpha: 0,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 18500,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Massimo, this.DIALOGO_Massimo_3],
                  alpha: 1,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 21500,
              callback: ()=>{
                  this.tweens.add({
                  targets:  this.DIALOGO_Massimo_3,
                  alpha: 0,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 23000,
              callback: ()=>{
                  this.tweens.add({
                  targets: this.DIALOGO_Massimo_4,
                  alpha: 1,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 26000,
              callback: ()=>{
                  this.PULSANTE_Pausa_Button.setAlpha(1);
                  this.tweens.add({
                  targets:  [this.DIALOGO_Massimo, this.DIALOGO_Massimo_4],
                  alpha: 0,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })



      }

      handler_dialog_min_2_quest(){

        if (flag_ORO==1) {
          this.events.off('dialog_min_2', this.handler_dialog_min_2_quest, this);

          this.tweens.add({
          targets: [this.DIALOGO_Massimo, this.DIALOGO_Massimo_Quest, this.PULSANTE_Oro],
          alpha: 1,
          duration: 2000,
          repeat: false
        });

        this.PULSANTE_Oro.on("pointerdown", ()=>{
            console.log("ORO DATO");
            //this.events.on('FOUND_CASCO_2', this.handler_CASCO_2, this);
            this.events.emit('FOUND_CASCO_2');
            this.tweens.add({
            targets: [this.DIALOGO_Massimo,this.DIALOGO_Massimo_Quest, this.PULSANTE_Oro],
            alpha: 0,
            duration: 1500,
            repeat: false
          });
        });


      } else if (flag_ORO!=1) {

          this.time.addEvent({
          delay: 4000,
              callback: ()=>{
                this.tweens.add({
                targets: [this.DIALOGO_Massimo, this.DIALOGO_Massimo_Quest],
                alpha: 1,
                duration: 1500,
                repeat: false
              });
              },
              loop: false

          })


        this.time.addEvent({
        delay: 7000,
            callback: ()=>{
                this.tweens.add({
                targets: [this.DIALOGO_Massimo, this.DIALOGO_Massimo_Quest],
                alpha: 0,
                duration: 1500,
                repeat: false
              });
            },
            loop: false

        })



        }

      }

      handler_min_3(){
        console.log("min 3 toccato");

        this.tweens.add({
        targets: [this.DIALOGO_Massimo,
                  this.DIALOGO_Massimo_1,
                  this.DIALOGO_Massimo_2,
                  this.DIALOGO_Massimo_3,
                  this.DIALOGO_Massimo_4,
                  this.DIALOGO_Massimo_Quest,
                  this.DIALOGO_Malpelo_6,
                  this.DIALOGO_Malpelo_6,
                  this.PULSANTE_Oro,
                  this.DIALOGO_Patrizio,
                  this.DIALOGO_Patrizio_1,
                  this.DIALOGO_Patrizio_2,
                  this.DIALOGO_Patrizio_3,
                  this.DIALOGO_Patrizio_Quest,
                  this.PULSANTE_Zuppa
                ],
        alpha: 0,
        duration: 1500,
        repeat: false
      });

        this.min_3.setVelocityX(0);
        this.min_3.play('idle_min3', true);

        if (this.player.body.x>this.min_3.body.x) {
            this.min_3.flipX = true;
        } else {
          this.min_3.flipX = false;
        }

      }

      handler_dialog_min_3(){
        this.PULSANTE_Pausa_Button.setAlpha(0);
        this.events.off('dialog_min_3', this.handler_dialog_min_3);

          this.tweens.add({
            targets: [this.DIALOGO_Christian, this.DIALOGO_Christian_1],
            alpha: 1,
            duration: 1500,
            repeat: false
          });

          this.time.addEvent({
          delay: 3000,
              callback: ()=>{
                  this.tweens.add({
                  targets:  this.DIALOGO_Christian_1,
                  alpha: 0,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 4500,
              callback: ()=>{
                  this.tweens.add({
                  targets: this.DIALOGO_Christian_2,
                  alpha: 1,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 7500,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Christian,this.DIALOGO_Christian_2],
                  alpha: 0,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 8500,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Malpelo_Luce, this.DIALOGO_Malpelo_8],
                  alpha: 1,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 11500,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Malpelo_Luce, this.DIALOGO_Malpelo_8],
                  alpha: 0,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 13000,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Christian, this.DIALOGO_Christian_3],
                  alpha: 1,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 16000,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.DIALOGO_Christian, this.DIALOGO_Christian_3],
                  alpha: 0,
                  duration: 1500,
                  repeat: false
                });
              },
              loop: false

          })

          this.time.addEvent({
          delay: 18500,
              callback: ()=>{
                  this.tweens.add({
                  targets: [this.PULSANTE_Rifiuta, this.PULSANTE_Fuggi],
                  alpha: 1,
                  duration: 1500,
                  repeat: false
                });
                this.PULSANTE_Rifiuta.on("pointerdown", ()=>{
                    console.log("Rifiutato");
                    this.events.on('rifiuto', this.handler_rifiuto, this);
                    this.events.emit('rifiuto');
                });

                this.PULSANTE_Fuggi.on("pointerdown", ()=>{
                    console.log("Accettato");
                    this.events.on('accetto', this.handler_accetto, this);
                    this.events.emit('accetto');

                });

              },
              loop: false

          })

      }

      handler_rifiuto(){
        this.tweens.add({
        targets: [this.PULSANTE_Rifiuta, this.PULSANTE_Fuggi],
        alpha: 0,
        duration: 1500,
        repeat: false
      });

      this.time.addEvent({
      delay: 1500,
          callback: ()=>{
              this.events.emit('ORO');
              this.tweens.add({
              targets: [this.DIALOGO_Malpelo_Luce, this.DIALOGO_Malpelo_Rifiuta],
              alpha: 1,
              duration: 1500,
              repeat: false
            });
          },
          loop: false

      })

      this.time.addEvent({
      delay: 4000,
          callback: ()=>{
              this.PULSANTE_Pausa_Button.setAlpha(1);
              this.tweens.add({
              targets: [this.DIALOGO_Malpelo_Luce, this.DIALOGO_Malpelo_Rifiuta],
              alpha: 0,
              duration: 1500,
              repeat: false
            });
          },
          loop: false

      })


      }

      handler_accetto(){
        this.tweens.add({
        targets: [this.PULSANTE_Rifiuta, this.PULSANTE_Fuggi],
        alpha: 0,
        duration: 1500,
        repeat: false
      });

      this.time.addEvent({
      delay: 1500,
          callback: ()=>{
              this.tweens.add({
              targets: [this.DIALOGO_Malpelo_Luce, this.DIALOGO_Malpelo_Fuggi],
              alpha: 1,
              duration: 1500,
              repeat: false
            });
          },
          loop: false

      })

      this.time.addEvent({
      delay: 6000,
          callback: ()=>{
              this.tweens.add({
              targets: [this.DIALOGO_Malpelo_Luce, this.DIALOGO_Malpelo_Fuggi],
              alpha: 0,
              duration: 1500,
              repeat: false
            });
          },
          loop: false

      })

      this.tweens.add({
      targets: [this.PULSANTE_Rifiuta, this.PULSANTE_Fuggi],
      alpha: 0,
      duration: 1500,
      repeat: false
    });

    this.time.addEvent({
    delay: 1500,
        callback: ()=>{
            this.tweens.add({
            targets: [this.DIALOGO_Malpelo_Luce, this.DIALOGO_Malpelo_Fuggi],
            alpha: 1,
            duration: 1500,
            repeat: false
          });
        },
        loop: false

    })

    this.time.addEvent({
    delay: 5000,
        callback: ()=>{

            this.tweens.add({
            targets: [this.DIALOGO_Papa_Miniera, this.DIALOGO_Papa_GameOver],
            alpha: 1,
            duration: 1000,
            repeat: false
          });
        },
        loop: false

    })
    this.time.addEvent({
    delay: 10000,
        callback: ()=>{
            this.cameras.main.fadeOut(5000, 0, 0, 0);
        },
        loop: false

    })

    this.time.addEvent({
    delay: 14000,
        callback: ()=>{
            this.scene.start("SceneLose");
        },
        loop: false

    })

    }

      handler_CASCO_1(){
          num_min++;
          this.FOUND_CASCO_1 = this.add.image(220, 130, "FOUND_CASCO_1")
          .setOrigin(0,0)
          .setScale(0.05)
          .setScrollFactor(0)
          .setAlpha(0)
          .setDepth(500);
          console.log("MINATORE 1 PRESO")
          this.tweens.add({
            targets: this.FOUND_CASCO_1,
            alpha: 1,
            duration: 500,
            repeat: false
          });
          this.events.emit('win');
        }

      handler_CASCO_2(){
          num_min++;
            this.FOUND_CASCO_2 = this.add.image(220, 130, "FOUND_CASCO_2")
            .setOrigin(0,0)
            .setScale(0.05)
            .setScrollFactor(0)
            .setAlpha(0)
            .setDepth(600);
            console.log("MINATORE 2 PRESO")
            this.tweens.add({
              targets: this.FOUND_CASCO_2,
              alpha: 1,
              duration: 500,
              repeat: false
            });
            this.events.emit('win');
          }

      handler_pausa(){
        this.tweens.pauseAll();
        this.input.keyboard.enabled = false;
        this.PULSANTE_Pausa_Button.setAlpha(0);
        this.tweens.add({
          targets: [
                    this.PAUSA_NERO,
                    this.PULSANTE_Pausa_Riprendi,
                    this.PULSANTE_Pausa_Menu,
                    ],
          alpha: 1,
          duration: 1500,
          repeat: false
      });

      this.PULSANTE_Pausa_Menu.on("pointerdown", ()=>{

        this.scene.start("SceneMenu", {id: 1});
      });

      this.PULSANTE_Pausa_Riprendi.on("pointerdown", ()=>{
        this.tweens.resumeAll();
        this.input.keyboard.enabled = true;
        this.PULSANTE_Pausa_Button.setAlpha(1);
        this.tweens.add({
          targets: [
                    this.PAUSA_NERO,
                    this.PULSANTE_Pausa_Riprendi,
                    this.PULSANTE_Pausa_Comandi,
                    this.PULSANTE_Pausa_Menu,
                    ],
          alpha: 0,
          duration: 500,
          repeat: false
      });
      });






      }

      handler_win(){
        console.log("CALL_WIN");
        console.log(num_min);
        if (num_min==2) {
          console.log("CALL_WIN_OK");
          this.scene.start("SceneWin");
        }

      }

      }
