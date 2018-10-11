import WebGL = Laya.WebGL;
// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(480,852, WebGL);
        //设置适配模式----------------------------------
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
        //设置居中对齐
        //Laya.stage.alignH = "center";
        //设置横竖屏
        // Laya.stage.screenMode = "vertical";
         //加载资源----然后执行加载之后的方法  ----create 会执行一次，并调用回调函数 ---------图集模式
         //来个数组。加载资源！
         var uiResArray = [
           //  {url:"res/atlas/player.atlas",type : Laya.Loader.ATLAS},
             {url:"res/atlas/mic.atlas",type : Laya.Loader.ATLAS},

         ];

         Laya.loader.load(uiResArray,Laya.Handler.create(this,this.onLoaded));
    }
    onLoaded():void{
         //如果是gamemaker思想，这里其实可以相当于，creat函数 ，里面可以做一个 帧函数的计时器 

        Laya.stage.addChild(new ui.loginUI());                                

    }
}
new GameMain();