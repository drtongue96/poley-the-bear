namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const Object = SpriteKind.create()
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
    if (lvl == 0) {
        doCutScene(1)
    }
    if (lvl == 1) {
        doCutScene(2)
        scene.setBackgroundColor(7)
        tiles.loadMap(tiles.createMap(tilemap`level4`))
        tiles.placeOnTile(hero, tiles.getTileLocation(4, 1))
        populateTown()
        timer.background(function () {
            while (currentLevel == 1) {
                for (let location of sprites.allOfKind(SpriteKind.NPC)) {
                    if (sprites.readDataString(location, "state") == "idle") {
                        if (Math.percentChance(20)) {
                            sprites.setDataString(location, "state", "walking")
                            scene.followPath(location, scene.aStar(tiles.locationOfSprite(location), tiles.getTilesByType(sprites.castle.tilePath8)._pickRandom()), 15)
                        }
                    } else {
                        if (characterAnimations.matchesRule(location, characterAnimations.rule(Predicate.NotMoving))) {
                            sprites.setDataString(location, "state", "idle")
                        }
                    }
                    pause(20)
                }
            }
        })
    }
    if (lvl == 2) {
        doCutScene(3)
        scene.setBackgroundColor(7)
        tiles.loadMap(tiles.createMap(tilemap`level4`))
        tiles.placeOnTile(hero, tiles.getTileLocation(4, 1))
        populateTown()
        timer.background(function () {
            while (currentLevel == 1) {
                for (let location of sprites.allOfKind(SpriteKind.NPC)) {
                    if (sprites.readDataString(location, "state") == "idle") {
                        if (Math.percentChance(20)) {
                            sprites.setDataString(location, "state", "walking")
                            scene.followPath(location, scene.aStar(tiles.locationOfSprite(location), tiles.getTilesByType(sprites.castle.tilePath8)._pickRandom()), 15)
                        }
                    } else {
                        if (characterAnimations.matchesRule(location, characterAnimations.rule(Predicate.NotMoving))) {
                            sprites.setDataString(location, "state", "idle")
                        }
                    }
                    pause(20)
                }
            }
        })
    }
}
function cleanUp () {
    tiles.destroySpritesOfKind(SpriteKind.NPC)
    tiles.destroySpritesOfKind(SpriteKind.Food)
    tiles.destroySpritesOfKind(SpriteKind.StatusBar)
    tiles.destroySpritesOfKind(SpriteKind.Object)
    tiles.destroySpritesOfKind(SpriteKind.Player)
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
function placeObject (image2: Image, col: number, row: number) {
    mySprite = sprites.create(image2, SpriteKind.Object)
    mySprite.setFlag(SpriteFlag.Ghost, true)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(col, row))
}
function playMusic (song: string) {
    if (song == "poleydies") {
        music.setTempo(160)
        timer.background(function () {
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
        music.setTempo(160)
        timer.background(function () {
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
    if (song == "endgame") {
        music.setTempo(176)
        timer.background(function () {
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(587, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(247, music.beat(BeatFraction.Half))
            music.playTone(233, music.beat(BeatFraction.Half))
            music.playTone(494, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
            music.playTone(220, music.beat(BeatFraction.Half))
            music.playTone(196, music.beat(BeatFraction.Half))
            music.playTone(220, music.beat(BeatFraction.Breve))
        })
        timer.background(function () {
            music.playTone(220, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(208, music.beat(BeatFraction.Whole))
            music.playTone(247, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Breve))
            music.playTone(165, music.beat(BeatFraction.Whole))
        })
    }
    if (song == "windturbine") {
        music.setTempo(200)
        timer.background(function () {
            music.playTone(175, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.playTone(220, music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.playTone(494, music.beat(BeatFraction.Quarter))
            music.playTone(392, music.beat(BeatFraction.Quarter))
        })
    }
    if (song == "newlevel") {
        music.setTempo(150)
        timer.background(function () {
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(220, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.playTone(247, music.beat(BeatFraction.Quarter))
            music.playTone(294, music.beat(BeatFraction.Triplet))
            music.playTone(330, music.beat(BeatFraction.Triplet))
            music.playTone(659, music.beat(BeatFraction.Triplet))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(494, music.beat(BeatFraction.Double))
        })
        timer.background(function () {
            music.rest(music.beat(BeatFraction.Double))
            music.rest(music.beat(BeatFraction.Whole))
            music.playTone(277, music.beat(BeatFraction.Whole))
            music.playTone(311, music.beat(BeatFraction.Double))
        })
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    playMusic("something")
})
function createNPC (index: number, col: number, row: number) {
    console.log("createNPC")
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
    characterAnimations.rule(Predicate.MovingRight)
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
    [townieRightAnim[index][0]],
    500,
    characterAnimations.rule(Predicate.FacingRight)
    )
    characterAnimations.setCharacterAnimationsEnabled(myNPC, true)
    sprites.setDataString(myNPC, "state", "idle")
    if (col == 99) {
        tiles.placeOnRandomTile(myNPC, assets.tile`tGreen`)
    } else {
        tiles.placeOnTile(myNPC, tiles.getTileLocation(col, row))
    }
}
function initializePlayer (lvl: number) {
    console.log("initializePlayer")
    if (lvl == 0) {
        hero = sprites.create(assets.image`myImage`, SpriteKind.Player)
        animateHero("poley")
    }
    if (lvl == 1) {
        hero = sprites.create(assets.image`myImage`, SpriteKind.Player)
        hungerbar = statusbars.create(20, 4, StatusBarKind.Health)
        animateHero("abc")
        hungerbar.setColor(6, 2)
        hungerbar.attachToSprite(hero)
        hungerbar.value = 50
        hungerbar.setLabel("Hunger")
        animateHero("poley")
    }
    if (currentLevel == 2) {
        hero = sprites.create(assets.image`sprTristini`, SpriteKind.Player)
        animateHero("tristini")
    }
    if (lvl == 3) {
        hero = sprites.create(assets.image`myImage`, SpriteKind.Player)
        animateHero("poley")
    }
    controller.moveSprite(hero, 50, 50)
    hero.z = 10
    scene.cameraFollowSprite(hero)
}
function animateHero (character: string) {
    if (character == "poleyswim") {
        characterAnimations.loopFrames(
        hero,
        assets.animation`animPoleySwim`,
        200,
        characterAnimations.rule(Predicate.NotMoving)
        )
        characterAnimations.loopFrames(
        hero,
        assets.animation`animPoleySwim`,
        200,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        hero,
        assets.animation`animPoleySwim`,
        200,
        characterAnimations.rule(Predicate.MovingDown)
        )
    }
    if (character == "poley") {
        characterAnimations.loopFrames(
        hero,
        assets.animation`animPoleyIdleR`,
        500,
        characterAnimations.rule(Predicate.NotMoving)
        )
        characterAnimations.loopFrames(
        hero,
        assets.animation`animPoleyR`,
        200,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        hero,
        assets.animation`animPoleyL`,
        200,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        hero,
        assets.animation`animPoleyD`,
        200,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        hero,
        assets.animation`animPoleyU`,
        200,
        characterAnimations.rule(Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        hero,
        assets.animation`animPoleyIdleL`,
        200,
        characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
        )
    }
    if (character == "tristini") {
        characterAnimations.loopFrames(
        hero,
        assets.animation`animTristiniIdle`,
        500,
        characterAnimations.rule(Predicate.NotMoving)
        )
        characterAnimations.loopFrames(
        hero,
        assets.animation`animTristiniRight`,
        200,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        hero,
        assets.animation`animTristiniL`,
        200,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        hero,
        assets.animation`animTristiniD`,
        200,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        hero,
        assets.animation`animTristiniUp`,
        200,
        characterAnimations.rule(Predicate.MovingUp)
        )
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    playMusic("poleydies")
})
function createGarbage (index: number, col: number, row: number) {
    console.log("createGarbage")
    mySprite = sprites.create(garbageSprites[index], SpriteKind.Food)
    sprites.setDataString(mySprite, "type", "garbage")
    if (col == 99) {
        tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath6)
    } else {
        mySprite.setPosition(col, row)
    }
}
function startGame () {
    setupLevel(currentLevel)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tFlag`, function (sprite, location) {
    cleanUp()
    currentLevel += 1
    initializePlayer(currentLevel)
    setupLevel(currentLevel)
})
function initializeGame () {
    console.log("initializeGame")
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
    garbageSprites = [
    assets.image`sprDeadFish`,
    assets.image`sprTinCan`,
    assets.image`sprGarbageDonut`,
    assets.image`sprGarbageBanana`,
    assets.image`sprGarbageApple`,
    assets.image`sprGarbageDrink`,
    assets.image`sprWaterBottle`
    ]
}
function placeStructure (image2: Image, col: number, row: number) {
    placeObject(image2, col, row)
    tiles.setWallAt(tiles.getTileLocation(col, row), true)
}
function doCutScene (num: number) {
    if (num == 1) {
        scene.setBackgroundColor(15)
        game.showLongText("Global warming is causing the glaciers in the North to melt, affecting the local wildlife.", DialogLayout.Full)
        tiles.loadMap(tiles.createMap(tilemap`tmCutscene1`))
        mySprite2 = sprites.create(assets.image`sprGlacier`, SpriteKind.Player)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(4, 1))
        tiles.placeOnTile(hero, tiles.getTileLocation(1, 1))
        hero.setFlag(SpriteFlag.Invisible, false)
        effects.blizzard.startScreenEffect()
        timer.after(2000, function () {
            music.spooky.play()
            imagemorph.morph(mySprite2, img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            hero.setImage(assets.image`sprPoleySwim`)
            animateHero("poleyswim")
            story.spriteMoveToLocation(hero, 80, 100, 40)
            hero.setImage(assets.image`sprPoleyR`)
            animateHero("poley")
        })
    }
    if (num == 2) {
        scene.setBackgroundColor(15)
        playMusic("newlevel")
        game.showLongText("Poley is hungry.  Find the garbage the townies are dropping, and make it to the checkpoint.  Don't get caught!", DialogLayout.Full)
    }
    if (num == 3) {
        scene.setBackgroundColor(15)
        playMusic("newlevel")
        game.showLongText("Tristini has noticed Poley and wants to do something about it.  Find the recycling bottles and return them to the Windmill in time.", DialogLayout.Full)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tGlacier2`, function (sprite, location) {
    cleanUp()
    currentLevel += 1
    initializePlayer(currentLevel)
    setupLevel(currentLevel)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
	
})
function saveGame () {
	
}
TilemapPath.on_sprite_finishes_path(function (sprite) {
	
})
function populateTown () {
    for (let index = 0; index < 4; index++) {
        createNPC(randint(0, 3), 99, 99)
    }
    for (let index = 0; index < 0; index++) {
        createGarbage(randint(0, 5), 99, 99)
    }
    for (let location of tiles.getTilesByType(assets.tile`tHouse1`)) {
        placeStructure(assets.image`sprRedHouseS`, tiles.locationXY(location, tiles.XY.column), tiles.locationXY(location, tiles.XY.row))
        makeWalls(tiles.locationXY(location, tiles.XY.column), tiles.locationXY(location, tiles.XY.row))
        mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        mySprite.z = 20
    }
    for (let location of tiles.getTilesByType(assets.tile`tHouse2`)) {
        placeStructure(assets.image`sprBrownHouseS`, tiles.locationXY(location, tiles.XY.column), tiles.locationXY(location, tiles.XY.row))
        makeWalls(tiles.locationXY(location, tiles.XY.column), tiles.locationXY(location, tiles.XY.row))
        mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        mySprite.z = 20
    }
    for (let location of tiles.getTilesByType(assets.tile`tHouse3`)) {
        placeStructure(assets.image`sprPurpleHouseS`, tiles.locationXY(location, tiles.XY.column), tiles.locationXY(location, tiles.XY.row))
        makeWalls(tiles.locationXY(location, tiles.XY.column), tiles.locationXY(location, tiles.XY.row))
        mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        mySprite.z = 20
    }
    for (let location of tiles.getTilesByType(assets.tile`tTree0`)) {
        placeStructure(assets.image`sprTree`, tiles.locationXY(location, tiles.XY.column), tiles.locationXY(location, tiles.XY.row))
        mySprite.y += -8
        mySprite.z = 20
    }
    for (let location of tiles.getTilesByType(assets.tile`tTree1`)) {
        placeStructure(assets.image`sprSmallPine`, tiles.locationXY(location, tiles.XY.column), tiles.locationXY(location, tiles.XY.row))
        mySprite.y += -4
        mySprite.z = 20
    }
    for (let location of tiles.getTilesByType(assets.tile`myTile0`)) {
        placeStructure(assets.image`sprWindmill`, tiles.locationXY(location, tiles.XY.column), tiles.locationXY(location, tiles.XY.row))
        mySprite.z = 20
    }
}
function makeWalls (col: number, row: number) {
    tiles.setWallAt(tiles.getTileLocation(col - 1, row), true)
    tiles.setWallAt(tiles.getTileLocation(col, row), true)
    tiles.setWallAt(tiles.getTileLocation(col + 1, row), true)
    tiles.setWallAt(tiles.getTileLocation(col - 1, row + 1), true)
    tiles.setWallAt(tiles.getTileLocation(col, row + 1), true)
    tiles.setWallAt(tiles.getTileLocation(col + 1, row + 1), true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 500)
    playSound("garbage")
    info.changeScoreBy(1)
    if (currentLevel == 1) {
        hungerbar.value += 10
    }
})
function populateMaze () {
    createNPC(0, 4, 0)
    path = TilemapPath.create_path([tiles.getTileLocation(4, 0), tiles.getTileLocation(4, 9), tiles.getTileLocation(4, 0)])
}
function changeColors (bool: boolean) {
    if (bool) {
        color.setColor(7, color.rgb(0, 255, 152))
    }
}
let garbageY = 0
let garbageX = 0
let path: TilemapPath.TilemapPath = null
let mySprite2: Sprite = null
let garbageSprites: Image[] = []
let hungerbar: StatusBarSprite = null
let townieRightAnim: Image[][] = []
let townieLeftAnim: Image[][] = []
let townieUpAnim: Image[][] = []
let townieDownAnim: Image[][] = []
let myNPC: Sprite = null
let mySprite: Sprite = null
let hero: Sprite = null
let currentLevel = 0
changeColors(false)
let debugMode = false
initializeGame()
currentLevel = 0
initializePlayer(currentLevel)
startGame()
game.onUpdateInterval(5000, function () {
    if (currentLevel == 1) {
        hungerbar.value += -5
    }
})
forever(function () {
    if (currentLevel == 3) {
        TilemapPath.follow_path(myNPC, path, 20)
    }
})
game.onUpdateInterval(500, function () {
    if (currentLevel == 1) {
        for (let location of sprites.allOfKind(SpriteKind.NPC)) {
            if (sight.isInSight(
            location,
            hero,
            200,
            false
            )) {
                location.sayText("bear!")
                timer.after(500, function () {
                    playMusic("something")
                    tiles.placeOnTile(hero, tiles.getTileLocation(4, 1))
                })
            } else {
                location.sayText("")
                hero.sayText("")
            }
        }
    }
    if (currentLevel == 2) {
        console.logValue("in loop", currentLevel)
        for (let location of sprites.allOfKind(SpriteKind.NPC)) {
            if (sight.isInSight(
            location,
            hero,
            32,
            false
            )) {
                location.sayText("bear!")
                scene.cameraShake(4, 500)
                timer.after(500, function () {
                    hero.sayText("doh")
                })
            } else {
                location.sayText("")
                hero.sayText("")
            }
        }
    }
})
game.onUpdateInterval(10000, function () {
    if (currentLevel == 1) {
        for (let location of sprites.allOfKind(SpriteKind.NPC)) {
            console.log(location)
            garbageX = location.x
            garbageY = location.y
            createGarbage(randint(0, 5), garbageX, garbageY)
        }
    }
    if (currentLevel == 2) {
        for (let location of sprites.allOfKind(SpriteKind.NPC)) {
            console.log(location)
            garbageX = location.x
            garbageY = location.y
            createGarbage(6, garbageX, garbageY)
        }
    }
})
