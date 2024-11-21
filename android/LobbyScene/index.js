System.register("chunks:///_virtual/LobbyScene",["./LobbyScene.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/LobbyScene.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,o,r,c,i;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.initializerDefineProperty},function(e){o=e.cclegacy,r=e.Label,c=e._decorator,i=e.Component}],execute:function(){var s,l,u,a,b;o._RF.push({},"f6da7vasiZHA5TgmHNqGg+O","LobbyScene",void 0);const{ccclass:p,property:y}=c;e("LobbyScene",(s=p("LobbyScene"),l=y(r),s((b=t((a=class extends i{constructor(...e){super(...e),n(this,"lbCountDown",b,this)}start(){let e=100;this.schedule((()=>{this.lbCountDown.string=(e--).toString()}),1,100)}update(e){}}).prototype,"lbCountDown",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),u=a))||u));o._RF.pop()}}}));

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