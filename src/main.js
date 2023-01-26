// Importo le scene
import SceneMenu from "./scenes/ME_menu.js";
import SceneCutscene from "./scenes/CU_cutscene.js";
import SceneWelcome from "./scenes/00_welcome.js";
import SceneMiniera from "./scenes/01_miniera.js";
import SceneStoria from "./scenes/02_storia.js";
import SceneCrediti from "./scenes/03_crediti.js"
import SceneLose from "./scenes/04_lose.js"
import SceneWin from "./scenes/05_win.js"




// Definiamo la configurazione di lancio del gioco
const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    //fisica arcade
    physics: {
        default: 'arcade',
            arcade: {
              gravity: {y: 500},
              debug: false
              }
            },

    backgroundColor: 0x000000, // sfondo nero
    scene: [SceneMenu,SceneCutscene,SceneWelcome,SceneMiniera,SceneStoria,SceneCrediti,SceneLose,SceneWin],
    pixelArt: true,
    parent: "game_area", // Specifica il div contenitore
    transparent: true
};

let game = new Phaser.Game(config);
game.gameState = {
    playTime: 30,
    score: 0,
    lives: 3
}
