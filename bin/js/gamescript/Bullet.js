var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
* name; 子弹类
*/
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super.call(this) || this;
        _this.speed = 5;
        _this.init();
        return _this;
    }
    //这个相当于 creat函数
    Bullet.prototype.init = function () {
        //缓存子弹动画    
        Laya.Animation.createFrames(["mic/bullet1.png", "mic/bullet2.png"], "bullet1_fly");
        this.bullet_body = new Laya.Animation(); //创建一个动画
        this.addChild(this.bullet_body); //把动画加到 this的容器里面
        //播放动画
        this.playAction("bullet1_fly");
        //设置帧循环
        Laya.timer.frameLoop(1, this, this.onLoop);
        //舞台上添加 鼠标移动事件
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
    };
    //相当于 step 函数
    Bullet.prototype.onLoop = function () {
        //this.x =this.x + this.speed;
    };
    Bullet.prototype.playAction = function (action) {
        //调用引擎函数 play
        this.bullet_body.play(0, true, action);
        //获取动画 大小
        var bound = this.bullet_body.getBounds();
        this.bullet_body.pos(-bound.width / 2, -bound.height / 2); //设置 位置//？？？？这里是不是应该是设置锚点的位置
    };
    Bullet.prototype.onMouseMove = function () {
        //this.pos(Laya.stage.mouseX,Laya.stage.mouseY);
        this.rotation = Laya.stage.rotation;
    };
    return Bullet;
}(Laya.Sprite));
//# sourceMappingURL=Bullet.js.map