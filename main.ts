namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
// Scene 1: Cut scene with glacier
// 
// Scene 2: Escape the water
// 
// Scene 3: Stealth: Collect Garbage before you die
// 
// Scene 4: Girl collects Garbage to create wind farms
function setupLevel (lvl: number) {
    music.stopAllSounds()
    tiles.loadMap(tiles.createMap(tilemap`level1`))
    effects.blizzard.startScreenEffect()
    tiles.placeOnTile(hero, tiles.getTileLocation(7, 0))
    for (let value of tiles.getTilesByType(tiles.util.object1)) {
        myNPC = sprites.create(assets.image`sprVillager1`, SpriteKind.NPC)
        tiles.placeOnTile(myNPC, value)
    }
}
function playSound (sound: string) {
	
}
function playMusic (song: string) {
    if (song == "poleydies") {
        timer.background(function () {
            music.setTempo(160)
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(494, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Double))
        })
        timer.background(function () {
            music.playTone(247, music.beat(BeatFraction.Double))
            music.playTone(220, music.beat(BeatFraction.Double))
        })
    }
    if (song == "something") {
        timer.background(function () {
            music.setTempo(160)
            music.playTone(494, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(659, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Quarter))
            music.playTone(247, music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(220, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        })
        timer.background(function () {
            music.playTone(165, music.beat(BeatFraction.Whole))
            music.playTone(147, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(165, music.beat(BeatFraction.Quarter))
            music.playTone(247, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(247, music.beat(BeatFraction.Whole))
            music.playTone(220, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(165, music.beat(BeatFraction.Whole))
            music.playTone(147, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        })
        timer.background(function () {
            music.rest(music.beat(BeatFraction.Breve))
            music.playTone(440, music.beat(BeatFraction.Quarter))
            music.playTone(370, music.beat(BeatFraction.Quarter))
            music.playTone(494, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(370, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        })
    }
}
function initializePlayer () {
    hero = sprites.create(assets.image`myImage`, SpriteKind.Player)
    controller.moveSprite(hero)
    scene.cameraFollowSprite(hero)
}
function startGame () {
    setupLevel(currentLevel)
}
function initializeGame () {
    currentLevel = 0
}
function doCutScene (scene2: number) {
    story.startCutscene(function () {
        controller.moveSprite(hero, 0, 0)
        hero.setFlag(SpriteFlag.Invisible, true)
        if (scene2 == 1) {
            tiles.loadMap(tiles.createMap(tilemap`tmCutscene1`))
        }
    })
    timer.after(4000, function () {
        game.splash("Poley The Bear")
    })
}
function saveGame () {
	
}
let currentLevel = 0
let myNPC: Sprite = null
let hero: Sprite = null
let debugMode = false
initializeGame()
initializePlayer()
startGame()
game.onUpdateInterval(500, function () {
    if (sight.isInSight(
    myNPC,
    hero,
    50,
    false
    )) {
        myNPC.sayText("i see you")
    } else {
        myNPC.sayText("Nothing")
    }
})
