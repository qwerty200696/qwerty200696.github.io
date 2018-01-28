class GuaGame {
	constructor(fps, images, runCallback) {
        // images 是一个对象，里面是图片的引用名字和路径
        // 程序会在所有图片加载完成后才允运行
	    window.fps = fps // 全局
	    this.images = images
	    this.runCallback = runCallback
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector("#myCanvas")
        this.context = this.canvas.getContext('2d')
        // event
        var self = this
        window.addEventListener('keydown',event => {
            this.keydowns[event.key] = true
        })
        window.addEventListener('keyup',function(event){
            self.keydowns[event.key] = false
        })
        this.init()
	}
	static instance(...args) {
	    this.i = this.i || new this(...args) //只让调用一次构造函数
	    return this.i
	}
    static new(fps, images, runCallback) {
        var i = new this(fps, images, runCallback)
        return i
    }
	drawImage(guaImage) {
        this.context.drawImage(guaImage.image, guaImage.x, guaImage.y);
    }
	//update
    update() { //使用箭头函数
        this.scene.update()
    }
    //draw
    draw() {
        this.scene.draw()
    }
    registerAction(key,callback) {
        this.actions[key] = callback
    }
    runloop() {
        log(window.fps)
        //events
        var g = this
        var actions = Object.keys(g.actions)
        for(var i= 0; i < actions.length; ++i){
            var key = actions[i]
            if(g.keydowns[key]){
                // 如果按键被按下，调用注册的action
                g.actions[key]()
            }
        }
        //update x
        g.update()
        //clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);
        //draw
        g.draw()
        //next loop
        setTimeout(function(){
            g.runloop()
        },1000/window.fps)
    }
    imageByName(name) {
        var g = this
        //log('image by name', g.images)
        var img = g.images[name]
        var image = {
            w: img.width,
            h: img.height,
            image: img,
        }
        return image
    }
    runwithScene(scene) { //手动调用runwithScene
        var g = this
        g.scene = scene
        // 开始运行程序
        setTimeout(function() {
            g.runloop()
        },1000/window.fps)
    }
    replaceScene(scene) {
        this.scene = scene
    }
    run() {
        this.runCallback(this)
    }
    init() {
        var g = this
        var loads = []
        // 预先载入所有图片
        var names = Object.keys(g.images)
        for(var i = 0; i < names.length; ++i) {
            let name = names[i] // name如果是var，只会取最后一个；let是新的东西
            var path = g.images[name]
            let imageObj = new Image()
            imageObj.src = path
            //log(imageObj)
            imageObj.onload = function() {
                //log(imageObj,g.images)
                // 存入g.images中
                g.images[name] = imageObj
                //所有图片都成功载入之后，调用run 
                loads.push(1)
                //log('载入图片')
                if(loads.length == names.length){
                    g.run()
                }
            }
        }
    }
}

