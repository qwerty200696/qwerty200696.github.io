var Paddle = function(game){ //挡板对象
    var o = game.imageByName('paddle')
    o.x = 100
    o.y = 200
    o.speed = 10
    o.move = function(x) {
        if(x < 0) {
            x = 0
        }
        else if( x > 400 - o.image.width) {
            x = 400 - o.image.width
        }
        o.x = x
    }
    o.moveLeft = function(){
        o.move(o.x - o.speed)
    }
    o.moveRight = function(){
        o.move(o.x + o.speed)
    }
    var aInb = function(x, x1, x2){
        return ((x >= x1) && (x 