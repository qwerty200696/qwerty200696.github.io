
class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('r',function(){
            // 跳转到正常游戏的场景
            var s = Scene(game)
            game.replaceScene(s)
        })

    }
	draw() {
        this.game.context.fillStyle = "orange";
        this.game.context.fillText("游戏结束，按 r 重玩", 180, 150)
	}
}

