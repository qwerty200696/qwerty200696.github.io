
var Block = function(game, position){ //砖块
    // position是[0,0]格式
    var p = position
    var o = game.imageByName('block')
    o.x = p[0]
    o.y = p[1]
    o.alive = true
    o.life = p[2] || 1
    o.kill = function() {
        if( !--o.life )
            o.alive = false
    }
    o.collide = function(ball){
        return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o))
    }
    return o;
}

