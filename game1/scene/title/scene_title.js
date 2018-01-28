
class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('s',function(){
            // 跳转到正常游戏的场景
            var s = Scene(game)
            game.replaceScene(s)
        })
    }
	draw() {
        this.game.context.fillStyle = "orange";
        this.game.context.fillText("按 s 开始游戏", 160, 150)
	}
}
