var log = console.log.bind(console) //是函数

//var e = sel => document.querySelector(sel)
//var log = function(s) {
//    e('#id-text-log').value += '\n' + s
//}

var imageFromPath = function(path){
    var imageObj = new Image()
    imageObj.src = path
    return imageObj
}

var rectIntersects = function(a, b) {
    if(b.y > a.y && b.y < a.y + a.image.height) {
        if(b.x > a.x && b.x < a.x + a.image.width){
            //log('相撞')
            return true
        }
    }
    return false
}
