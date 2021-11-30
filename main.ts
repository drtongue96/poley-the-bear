function setupLevel (lvl: number) {
    tiles.setTilemap(tilemap`level1`)
}
function startGame () {
    setupLevel(currentLevel)
}
function initializeGame () {
    effects.blizzard.startScreenEffect()
}
function doCutScene (scene2: number) {
    if (currentLevel == 0) {
    	
    }
}
function saveGame () {
	
}
/**
 * Scene 1: Cut scene with glacier
 * 
 * Scene 2: Escape the water
 * 
 * Scene 3: Stealth: Collect Garbage before you die
 * 
 * Scene 4: Girl collects Garbage to create wind farms
 */
let currentLevel = 0
let hero = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(hero)
scene.cameraFollowSprite(hero)
currentLevel = 0
initializeGame()
startGame()
