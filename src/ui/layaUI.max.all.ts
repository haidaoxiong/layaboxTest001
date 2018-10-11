
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class loginUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":480,"height":852},"child":[{"type":"Image","props":{"skin":"scenes/background.png"}},{"type":"Image","props":{"y":190,"x":190,"skin":"mic/ufo1.png"},"compId":3},{"type":"Image","props":{"y":624,"x":180,"skin":"player/hero_fly1.png"}}],"animations":[{"nodes":[{"target":3,"keyframes":{"y":[{"value":190,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":433,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":15}],"x":[{"value":190,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":187,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.loginUI.uiView);

        }

    }
}

module ui {
    export class gameUI extends View {

        public static  uiView:any ={"type":"View","props":{}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.uiView);

        }

    }
}
