
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class loginUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":480,"height":852},"child":[{"type":"Image","props":{"skin":"scenes/background.png"}},{"type":"Image","props":{"y":682,"x":211,"skin":"mic/ufo1.png"}}]};
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
