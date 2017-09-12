/*! formstone v1.4.0 [tooltip.js] 2017-09-11 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core"],t):t(jQuery,Formstone)}(function(t,e){"use strict";function o(t){c();var e=t.data;e.left=t.pageX,e.top=t.pageY,r(e)}function i(t){var e=t.data;u.clearTimer(e.timer),c()}function n(t){l(t.pageX,t.pageY)}function r(o){c();var r="";r+='<div class="',r+=[f.base,f[o.direction],o.theme,o.customClass].join(" "),r+='">',r+='<div class="'+f.content+'">',r+=o.formatter.call(o.$el,o),r+='<span class="'+f.caret+'"></span>',r+="</div>",p={$tooltip:t(r+="</div>"),$el:o.$el},e.$body.append(p.$tooltip);var a=p.$tooltip.find(s.content),m=p.$tooltip.find(s.caret),g=o.$el.offset(),h=o.$el.outerHeight(),v=o.$el.outerWidth(),$=0,b=0,y=0,j=0,w=!1,C=!1,H=m.outerHeight(!0),W=m.outerWidth(!0),L=a.outerHeight(!0),M=a.outerWidth(!0);"right"===o.direction||"left"===o.direction?(C=(L-H)/2,j=-L/2,"right"===o.direction?y=o.margin:"left"===o.direction&&(y=-(M+o.margin))):(w=(M-W)/2,y=-M/2,"bottom"===o.direction?j=o.margin:"top"===o.direction&&(j=-(L+o.margin))),a.css({top:j,left:y}),m.css({top:C,left:w}),o.follow?o.$el.on(d.mouseMove,o,n):(o.match?"right"===o.direction||"left"===o.direction?(b=o.top,"right"===o.direction?$=g.left+v:"left"===o.direction&&($=g.left)):($=o.left,"bottom"===o.direction?b=g.top+h:"top"===o.direction&&(b=g.top)):"right"===o.direction||"left"===o.direction?(b=g.top+h/2,"right"===o.direction?$=g.left+v:"left"===o.direction&&($=g.left)):($=g.left+v/2,"bottom"===o.direction?b=g.top+h:"top"===o.direction&&(b=g.top)),l($,b)),o.timer=u.startTimer(o.timer,o.delay,function(){p.$tooltip.addClass(f.visible)}),o.$el.one(d.mouseLeave,o,i)}function l(t,e){p&&p.$tooltip.css({left:t,top:e})}function c(){p&&(p.$el.off([d.mouseMove,d.mouseLeave].join(" ")),p.$tooltip.remove(),p=null)}var a=e.Plugin("tooltip",{widget:!0,defaults:{customClass:"",delay:0,direction:"top",follow:!1,formatter:function(t){return this.data("title")},margin:15,match:!1,theme:"fs-light"},classes:["content","caret","visible","top","bottom","right","left"],methods:{_construct:function(t){this.on(d.mouseEnter,t,o)},_destruct:function(t){c(),this.off(d.namespace)}}}),s=a.classes,f=s.raw,d=a.events,u=a.functions,p=null});