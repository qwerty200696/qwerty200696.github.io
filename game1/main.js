
var loadLevel = function(game, n){
    n = n -1
    var level = levels[n]
    var blocks = []
    for(var i = 0; i < level.length; ++i) {
        var p = level[i]
        var b = Block(game, p) // 临时变量尽量简短表示
        // 初始化已经设置block坐标
        blocks.push(b)
    }
    return blocks
}

var enableDebugMode = function(game, enable) {
    if(!enable) {
        return
    }
    //这是为了debug
    window.paused = false
    window.addEventListener('keydown',function(event) {
        var k = event.key
        if(k == 'p'){
            // 暂停功能
            paused = !paused
        }else if('123456789'.includes(k)) {
            // 为了debug临时加的载入关卡功能
            blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(){
        var input = event.target
        //log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function(){
    var images = { //不能是数组，需要是对象，给每个取个名字
        ball: 'img/ball.png',
        block: 'img/block.png',
        paddle: 'img/paddle.png',
    } 
    //用.new成员或new来初始化GuaGame都是可以的。或者用instance
    var game = GuaGame.instance(30, images, function(g){ //加个回调
        var s = SceneTitle.new(g)
        g.runwithScene(s)
    }) // 不加上var的时候是全局变量，可用于调试。
    
    enableDebugMode(game, true)

}

__main() //注意，是__main函数，小括号不要忘记
//log(__main)

