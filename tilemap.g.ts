// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "tmCutscene1":
            case "tmCutscene1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102020202010102020202010101010101020101010101020101010101010101010201010101010202020201010101010102010101010101010102010101010101020101010101010101020101010101010202020201010202020201010101010101010101010101010101010101010101010101010202010101010101010101010101010101020101010101010101010101010101010201010101010101010101010101010202020101010101010101010101010101010101010101010101`, img`
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
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003030303030307010104030303030303030303030303070101040303030303030303030303030701010403030303030303030303030307010104030303030303030303030303070101040303030303030606060606060701010506060606060601010101010201010101010101010101010101010101010101010101010101010303030303030301010303030303030303030303030303010103030303030303030303030303030101030303030303030303030303030301010303030303030303030303030303010103030303030303030303030303030101030303030303030303030303030301010303030303030303030303030303010103030303030303`, img`
. . . . . . 2 . . 2 . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
. . . . . . 2 . . 2 2 . . . . . 
. . . . . . 2 . . 2 . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,tiles.util.object1,sprites.castle.tilePath5,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tOffWhite":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
