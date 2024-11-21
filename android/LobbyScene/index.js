System.register("chunks:///_virtual/LobbyScene", ['./LobbyScene.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/LobbyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, _decorator, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "f6da7vasiZHA5TgmHNqGg+O", "LobbyScene", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let LobbyScene = exports('LobbyScene', (_dec = ccclass('LobbyScene'), _dec2 = property(Label), _dec(_class = (_class2 = class LobbyScene extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lbCountDown", _descriptor, this);
        }

        start() {
          let a = 100;
          this.schedule(() => {
            this.lbCountDown.string = (a--).toString();
          }, 1, 100);
        }

        update(deltaTime) {}

      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbCountDown", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/LobbyScene', 'chunks:///_virtual/LobbyScene'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});