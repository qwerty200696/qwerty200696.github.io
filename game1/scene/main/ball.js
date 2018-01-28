
var Ball = function(game){ //球
    var o = game.imageByName('ball')
    o.x = 100,
    o.y = 150,
    o.speedX = 10,
    o.speedY = 10,
    o.fired = false 
    o.fire = function() {
        o.fired = true
    }
    o.move = function() {
        if(o.fired){
            //log('move')
            if(o.x < 0 || o.x > 400){
                o.speedX *= -1
            }
            else if(o.y < 0  || o.y > 300){
                o.speedY *= -1
            }
            o.x += o.speedX
            o.y += o.speedY
        } 
    }
    o.bounce = function() {
        o.speedY *= -1
    }
    o.hasPoint = function(x, y) {
        var xIn = (x >= o.x) && (x <= o.x="" +="" o.w)="" var="" yin="(y">= o.y) && y </=>