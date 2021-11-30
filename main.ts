function setupLevel (lvl: number) {
	
}
function startGame () {
    setupLevel(currentLevel)
}
function initializeGame () {
	
}
function doCutScene (scene2: number) {
    if (currentLevel == 0) {
    	
    }
}
/**
 * Scene 1: Cut scene with glacier
 * 
 * Scene 2: Escape the water
 * 
 * Scene 3: Stealth: Collect Garbage before you die
 * 
 * Scene 4:
 */
let currentLevel = 0
let hero = sprites.create(assets.image`sprPoley`, SpriteKind.Player)
controller.moveSprite(hero)
currentLevel = 0
initializeGame()
startGame()
