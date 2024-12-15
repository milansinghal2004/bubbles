controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    bubble.tossBubble()
    bubble.load_bubble()
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function on_right_repeated() {
    bubble.tilt_angle(bubble.Choice.Right)
})
scene.onHitWall(SpriteKind.Bubble, function on_hit_wall(sprite: Sprite, location: tiles.Location) {
    bubble.stick_to_wall(sprite, location)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function on_left_repeated() {
    bubble.tilt_angle(bubble.Choice.Left)
})
bubble.createBoard()
bubble.load_bubble()
let mySprite = sprites.create(io2_images.joy, SpriteKind.Player)
mySprite.top = 102
