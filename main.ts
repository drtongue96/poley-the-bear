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
    tiles.loadMap(tiles.createMap(tilemap`level6`))
    effects.blizzard.startScreenEffect()
    tiles.placeOnTile(hero, tiles.getTileLocation(7, 0))
    populateTown()
    timer.background(function () {
        while (currentLevel == 1) {
            console.log("in loop")
            for (let value of sprites.allOfKind(SpriteKind.NPC)) {
                if (sprites.readDataString(value, "state") == "idle") {
                    if (Math.percentChance(50)) {
                        sprites.setDataString(value, "state", "walking")
                        scene.followPath(value, scene.aStar(tiles.locationOfSprite(value), tiles.getTilesByType(assets.tile`tGreen`)._pickRandom()), 50)
                    }
                }
                pause(20)
            }
        }
    })
}
function playSound (sound: string) {
    if (sound == "garbage") {
        music.setTempo(140)
        music.playTone(247, music.beat(BeatFraction.Eighth))
        music.playTone(220, music.beat(BeatFraction.Eighth))
        music.playTone(165, music.beat(BeatFraction.Eighth))
        music.playTone(330, music.beat(BeatFraction.Eighth))
        music.playTone(294, music.beat(BeatFraction.Eighth))
        music.playTone(494, music.beat(BeatFraction.Eighth))
        music.playTone(659, music.beat(BeatFraction.Eighth))
        music.playTone(466, music.beat(BeatFraction.Eighth))
        music.playTone(622, music.beat(BeatFraction.Half))
    }
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
function createNPC (index: number) {
    myNPC = sprites.create(townieDownAnim[index][0], SpriteKind.NPC)
    characterAnimations.loopFrames(
    myNPC,
    townieUpAnim[index],
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    myNPC,
    townieDownAnim[index],
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    myNPC,
    townieLeftAnim[index],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    myNPC,
    townieRightAnim[index],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    myNPC,
    townieUpAnim[index],
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.runFrames(
    myNPC,
    [townieUpAnim[index][0]],
    500,
    characterAnimations.rule(Predicate.FacingUp)
    )
    characterAnimations.runFrames(
    myNPC,
    [townieDownAnim[index][0]],
    500,
    characterAnimations.rule(Predicate.FacingDown)
    )
    characterAnimations.runFrames(
    myNPC,
    [townieLeftAnim[index][0]],
    500,
    characterAnimations.rule(Predicate.FacingLeft)
    )
    characterAnimations.runFrames(
    myNPC,
    [townieLeftAnim[index][0]],
    500,
    characterAnimations.rule(Predicate.FacingRight)
    )
    characterAnimations.setCharacterAnimationsEnabled(myNPC, true)
    sprites.setDataString(myNPC, "state", "idle")
    tiles.placeOnRandomTile(myNPC, assets.tile`tGreen`)
}
function initializePlayer () {
    hero = sprites.create(assets.image`myImage`, SpriteKind.Player)
    controller.moveSprite(hero, 50, 50)
    scene.cameraFollowSprite(hero)
    characterAnimations.loopFrames(
    hero,
    assets.animation`animPoleyIdleR`,
    500,
    characterAnimations.rule(Predicate.NotMoving)
    )
}
function startGame () {
    setupLevel(currentLevel)
}
function initializeGame () {
    currentLevel = 1
    townieDownAnim = [
    assets.animation`animT1D`,
    assets.animation`animT2D`,
    assets.animation`animT3D`,
    assets.animation`animT4D`
    ]
    townieUpAnim = [
    assets.animation`animT1U`,
    assets.animation`animT2U`,
    assets.animation`animT3U`,
    assets.animation`animT4U`
    ]
    townieLeftAnim = [
    assets.animation`animT1L`,
    assets.animation`animT2L`,
    assets.animation`animT3L`,
    assets.animation`animT4L`
    ]
    townieRightAnim = [
    assets.animation`animT1R`,
    assets.animation`animT2R`,
    assets.animation`animT3R`,
    assets.animation`animT4R`
    ]
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
function populateTown () {
    for (let index = 0; index < 50; index++) {
        createNPC(randint(0, 3))
    }
}
let townieRightAnim: Image[][] = []
let townieLeftAnim: Image[][] = []
let townieUpAnim: Image[][] = []
let townieDownAnim: Image[][] = []
let myNPC: Sprite = null
let currentLevel = 0
let hero: Sprite = null
let debugMode = false
initializeGame()
initializePlayer()
startGame()
game.onUpdateInterval(500, function () {
    for (let value of sprites.allOfKind(SpriteKind.NPC)) {
        if (sight.isInSight(
        value,
        hero,
        50,
        false
        )) {
            value.sayText("i see you")
            timer.after(500, function () {
                hero.sayText("doh")
            })
        } else if (false) {
        	
        } else {
            value.sayText("Nothing")
            hero.sayText("")
        }
    }
})
