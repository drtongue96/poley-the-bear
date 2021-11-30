/**
 * Scene 1: Cut scene with glacier
 * 
 * Scene 2: Escape the water
 * 
 * Scene 3: Stealth: Collect Garbage before you die
 * 
 * Scene 4: Girl collects Garbage to create wind farms
 */
function setupLevel (lvl: number) {
    music.stopAllSounds()
    tiles.loadMap(tiles.createMap(tilemap`level1`))
}
function playSound (sound: string) {
	
}
function playMusic (song: string) {
	
}
function initializePlayer () {
	
}
function startGame () {
    doCutScene(1)
    setupLevel(currentLevel)
}
function initializeGame () {
    effects.blizzard.startScreenEffect()
}
function doCutScene (scene2: number) {
    if (currentLevel == 0) {
    	
    }
    if (scene2 == 1) {
        tiles.loadMap(tiles.createMap(tilemap`tmCutscene1`))
    }
    story.startCutscene(function () {
        timer.after(2000, function () {
            game.splash("Poley The Bear")
        })
    })
}
function saveGame () {
	
}
let currentLevel = 0
let debugMode = false
let hero = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(hero)
scene.cameraFollowSprite(hero)
currentLevel = 0
initializeGame()
initializePlayer()
startGame()
