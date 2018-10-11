var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var loginUI = (function (_super) {
        __extends(loginUI, _super);
        function loginUI() {
            return _super.call(this) || this;
        }
        loginUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.loginUI.uiView);
        };
        return loginUI;
    }(View));
    loginUI.uiView = { "type": "View", "props": { "width": 480, "height": 852 }, "child": [{ "type": "Image", "props": { "skin": "scenes/background.png" } }, { "type": "Image", "props": { "y": 190, "x": 190, "skin": "mic/ufo1.png" }, "compId": 3 }, { "type": "Image", "props": { "y": 624, "x": 180, "skin": "player/hero_fly1.png" } }], "animations": [{ "nodes": [{ "target": 3, "keyframes": { "y": [{ "value": 190, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "y", "index": 0 }, { "value": 433, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "y", "index": 15 }], "x": [{ "value": 190, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 0 }, { "value": 187, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
    ui.loginUI = loginUI;
})(ui || (ui = {}));
(function (ui) {
    var gameUI = (function (_super) {
        __extends(gameUI, _super);
        function gameUI() {
            return _super.call(this) || this;
        }
        gameUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.gameUI.uiView);
        };
        return gameUI;
    }(View));
    gameUI.uiView = { "type": "View", "props": {} };
    ui.gameUI = gameUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map