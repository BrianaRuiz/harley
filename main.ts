let mySprite: Sprite = null
controller.moveSprite(mySprite)
controller.player2.moveSprite(sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 . 5 5 . 5 5 5 . . 
    . . . . 5 3 5 . 3 5 . 5 3 5 . . 
    . . . . 5 5 . . 5 . . 5 5 . . . 
    . . . . 5 5 . . 5 . . 5 5 . . . 
    . . . . 5 5 . . 5 . . 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 4 5 5 4 5 5 4 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player), 100, 100)
game.setDialogCursor(img`
    . . . 5 5 5 . . . . 5 5 5 . . . 
    . . 5 5 5 5 5 . . 5 5 5 5 5 . . 
    f f 5 5 f 5 5 . . 5 5 f 5 5 f f 
    f f f f 5 5 . . . 5 5 5 5 5 f f 
    . f 1 f 5 5 f f f f f 5 5 f f f 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    . f f 1 1 1 1 1 1 1 1 1 1 1 1 f 
    . . f 1 1 f f f 1 1 f f f 1 f f 
    . f f 1 1 1 3 1 1 1 1 3 1 1 f . 
    . f 1 1 1 1 1 1 1 1 1 1 1 f f . 
    . f f 1 1 1 1 1 5 1 1 1 1 f . . 
    . . f f 1 1 1 1 1 1 1 1 1 f . . 
    . . . f f f 1 1 f f 1 1 f f . . 
    . . . . . f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
music.jumpUp.loop()
game.over(true)
