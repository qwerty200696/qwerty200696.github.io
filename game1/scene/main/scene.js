var Scene = function(game) {
    var s = {
        game: game,
    }
    // 初始化
    var paddle = Paddle(game)
    var ball = Ball(game)
    var score = 0
    blocks = loadLevel(game, 1)
    var paused = false
    
    game.registerAction('a',function(){
        paddle.moveLeft()
    })
    game.registerAction('d',function(){
        paddle.moveRight()
    })
    game.registerAction('f',function(){
        ball.fire()
    })
    
    s.update = function(){
        if(window.paused) {
            return true
        }
        // s.update
        ball.move()
        // 判断游戏结束
        if(ball.y > paddle.y) {
            // 跳转到游戏结束的场景
            var end = new SceneEnd(game)
            game.replaceScene(end)
            return
        }
        // 判断碰撞
        if(paddle.collide(ball)){
            //这边可以调用函数ball.反弹()实现
            //ball.speedY *= -1
            ball.bounce()
        }
        // 判断ball与blocks相撞
        for(var i = 0; i < blocks.length; ++i){
            var block = blocks[i]
            if(block.collide(ball)){
                log('block 相撞')
                block.kill()
                ball.bounce()
                // 更新分数
                score += 100
            }
        }
    }
    s.draw = function(){
        //log('draw')
        // draw background color
        game.context.fillStyle = "#554";
        game.context.fillRect(0, 0, 400, 300)
        //draw element
        game.drawImage(paddle)
        game.drawImage(ball)
        //draw blocks
        for(var i = 0; i < blocks.length; ++i){
            var block = blocks[i]
            if(block.alive){
                game.drawImage(block)
            }
        }
        //draw labels
        game.context.fillStyle = "orange";
        game.context.fillText("分数：" + score, 10, 290)
    }
    
    // mouse event
    var enableDrag = false
    game.canvas.addEventListener('mousedown', function(event){
        log(event)
        var x = event.offsetX
        var y = event.offsetY
        
        // 检查是否点中了ball
        if(ball.hasPoint(x,y)){
            // 设置拖拽状态
            enableDrag = true
        }
    })
    game.canvas.addEventListener('mousemove', function(event){
        var x = event.offsetX
        var y = event.offsetY
        log(x, y, 'move')
        if (enableDrag) {
            ball.x = x
            ball.y = y
        }
    })
    game.canvas.addEventListener('mouseup', function(event){
        log(event)
        var x = event.offsetX
        var y = event.offsetY
        // 设置拖拽状态
        enableDrag = false
    })
    return s 
}
