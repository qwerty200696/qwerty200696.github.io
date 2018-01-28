
class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('m',function(){
            // 跳转到正常游戏的场景
            var s = Scene(game)
            game.replaceScene(s)
        })
    }
	draw() {
        this.game.context.fillStyle = "orange";
	this.game.context.font = "10pt Microsoft JhengHei";
        this.game.context.fillText("打砖块小游戏", 140, 100)
        this.game.context.fillText("请先点击下方输入框后", 120, 140)
        this.game.context.fillText("按 m 开始游戏", 120, 155)
        this.game.context.fillText("按 k 发射小球", 120, 170)
        this.game.context.fillText("按 1,2,3,4 可调节关卡", 120, 185)
        this.game.context.fillText("移动滑块可调节小球速度", 120, 200)
	}
}
