(function(g){var window=this;'use strict';var C6=function(a){g.V.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.Zd=!1;this.player=a;this.T(a,"minimized",this.Zf);this.T(a,"onStateChange",this.PG)},D6=function(a){g.EM.call(this,a);
this.i=new C6(this.player);this.i.hide();g.rM(this.player,this.i.element,4);a.Oe()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(C6,g.V);g.k=C6.prototype;
g.k.HE=function(){this.tooltip=new g.iQ(this.player,this);g.I(this,this.tooltip);g.rM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.yc=new g.xN(this.player);g.I(this,this.yc);this.Eg=new g.V({G:"div",L:"ytp-miniplayer-scrim"});g.I(this,this.Eg);this.Eg.Ea(this.element);this.T(this.Eg.element,"click",this.wA);var a=new g.V({G:"button",Ja:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.uK()]});g.I(this,a);a.Ea(this.Eg.element);this.T(a.element,"click",this.Ki);
a=new g.Q1(this.player,this);g.I(this,a);a.Ea(this.Eg.element);this.Gp=new g.V({G:"div",L:"ytp-miniplayer-controls"});g.I(this,this.Gp);this.Gp.Ea(this.Eg.element);this.T(this.Gp.element,"click",this.wA);var b=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,b);b.Ea(this.Gp.element);a=new g.V({G:"div",L:"ytp-miniplayer-play-button-container"});g.I(this,a);a.Ea(this.Gp.element);var c=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,c);c.Ea(this.Gp.element);this.xN=new g.XO(this.player,
this,!1);g.I(this,this.xN);this.xN.Ea(b.element);b=new g.VO(this.player,this);g.I(this,b);b.Ea(a.element);this.nextButton=new g.XO(this.player,this,!0);g.I(this,this.nextButton);this.nextButton.Ea(c.element);this.Hg=new g.UP(this.player,this);g.I(this,this.Hg);this.Hg.Ea(this.Eg.element);this.Kc=new g.eP(this.player,this);g.I(this,this.Kc);g.rM(this.player,this.Kc.element,4);this.kA=new g.V({G:"div",L:"ytp-miniplayer-buttons"});g.I(this,this.kA);g.rM(this.player,this.kA.element,4);a=new g.V({G:"button",
Ja:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.uK()]});g.I(this,a);a.Ea(this.kA.element);this.T(a.element,"click",this.Ki);a=new g.V({G:"button",Ja:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Close"},U:[g.zK()]});g.I(this,a);a.Ea(this.kA.element);this.T(a.element,"click",this.XV);this.T(this.player,"presentingplayerstatechange",this.Qc);this.T(this.player,"appresize",this.yb);this.T(this.player,"fullscreentoggled",this.yb);this.yb()};
g.k.show=function(){this.Pd=new g.ds(this.uq,null,this);this.Pd.start();this.Zd||(this.HE(),this.Zd=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Kc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Pd&&(this.Pd.dispose(),this.Pd=void 0);g.V.prototype.hide.call(this);this.player.Oe()||(this.Zd&&this.Kc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.Pd&&(this.Pd.dispose(),this.Pd=void 0);g.V.prototype.ya.call(this)};
g.k.Ki=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.k.XV=function(){this.player.playVideo()};
g.k.wA=function(a){if(a.target===this.Eg.element||a.target===this.Gp.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.xJ(this.player.Ab())?this.player.pauseVideo():this.player.playVideo():this.player.Oa("onExpandMiniplayer")};
g.k.Zf=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Oe())};
g.k.yd=function(){this.Kc.Xb();this.Hg.Xb()};
g.k.uq=function(){this.yd();this.Pd&&this.Pd.start()};
g.k.Qc=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.yb=function(){g.rP(this.Kc,0,this.player.bb().getPlayerSize().width,!1);g.fP(this.Kc)};
g.k.PG=function(a){this.player.Oe()&&(0===a?this.hide():this.show())};
g.k.lc=function(){return this.tooltip};
g.k.Ve=function(){return!1};
g.k.yf=function(){return!1};
g.k.Di=function(){return!1};
g.k.jB=function(){};
g.k.Cn=function(){};
g.k.zs=function(){};
g.k.Qn=function(){return null};
g.k.xj=function(){return new g.Zm(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Cq=function(a,b,c,d,e){var f=0,h=d=0,l=g.sn(a);if(b){c=g.ls(b,"ytp-prev-button")||g.ls(b,"ytp-next-button");var m=g.ls(b,"ytp-play-button"),n=g.ls(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.qn(b,this.element),h=b.x,f=b.y-12):n&&(h=g.ls(b,"ytp-miniplayer-button-top-left"),f=g.qn(b,this.element),b=g.sn(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.bb().getPlayerSize().width;e=f+(e||0);l=g.sg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.rl=function(){};
g.k.Hk=function(){return!1};g.w(D6,g.EM);D6.prototype.create=function(){};
D6.prototype.Wi=function(){return!1};
D6.prototype.load=function(){this.player.hideControls();this.i.show()};
D6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.DM("miniplayer",D6);})(_yt_player);
