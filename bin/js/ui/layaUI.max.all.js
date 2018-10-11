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
    loginUI.uiView = { "type": "View", "props": { "width": 480, "height": 852 }, "child": [{ "type": "Image", "props": { "skin": "scenes/background.png" } }, { "type": "Image", "props": { "y": 682, "x": 211, "skin": "mic/ufo1.png" } }] };
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