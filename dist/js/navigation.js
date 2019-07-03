/*! formstone v1.4.14 [navigation.js] 2019-07-03 | GPL-3.0 License | formstone.it */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./swap"],a):a(jQuery,Formstone)}(function(d,a){"use strict";function t(a){a.$handle.fsSwap("deactivate")}function o(a){a.data.$handle.addClass(v.focus)}function i(a){a.data.$handle.removeClass(v.focus)}function s(a){var e=a.data;13!==a.keyCode&&32!==a.keyCode||(g.killEvent(a),e.$handle.trigger(m.raw.click))}function r(a){if(!a.originalEvent){var e=a.data;e.open||(e.$el.trigger(m.open).attr("aria-hidden",!1),e.$content.addClass(e.contentClassesOpen).one(m.click,function(){t(e)}),e.$handle.attr("aria-expanded",!0),e.label&&e.$handle.html(e.labels.open),function(a){a.isToggle||$.addClass(v.lock)}(e),e.open=!0,e.$nav.focus())}}function c(a){if(!a.originalEvent){var e=a.data;e.open&&(e.$el.trigger(m.close).attr("aria-hidden",!0),e.$content.removeClass(e.contentClassesOpen).off(m.namespace),e.$handle.attr("aria-expanded",!1),e.label&&e.$handle.html(e.labels.closed),n(e),e.open=!1,e.$el.focus())}}function h(a){var e=a.data;e.$el.attr("aria-hidden",!0),e.$handle.attr("aria-controls",e.ariaId).attr("aria-expanded",!1),e.$content.addClass(v.enabled),setTimeout(function(){e.$animate.addClass(v.animated)},0),e.label&&e.$handle.html(e.labels.closed)}function u(a){var e=a.data;e.$el.removeAttr("aria-hidden"),e.$handle.removeAttr("aria-controls").removeAttr("aria-expanded"),e.$content.removeClass(v.enabled,v.animated),e.$animate.removeClass(v.animated),l(e),n(e)}function n(a){a.isToggle||$.removeClass(v.lock)}function l(a){if(a.label)if(1<a.$handle.length)for(var e=0,t=a.$handle.length;e<t;e++)a.$handle.eq(e).html(a.originalLabel[e]);else a.$handle.html(a.originalLabel)}var e=a.Plugin("navigation",{widget:!0,defaults:{customClass:"",gravity:"left",label:!0,labels:{closed:"Menu",open:"Close"},maxWidth:"980px",theme:"fs-light",type:"toggle"},classes:["handle","nav","content","animated","enabled","focus","open","toggle","push","reveal","overlay","left","right","lock"],events:{open:"open",close:"close"},methods:{_construct:function(a){a.handleGuid=v.handle+a.guid,a.isToggle="toggle"===a.type,a.open=!1,a.isToggle&&(a.gravity="");var e=v.base,t=[e,a.type].join("-"),n=a.gravity?[t,a.gravity].join("-"):"",l=[a.rawGuid,a.theme,a.customClass].join(" ");a.handle=this.data(p+"-handle"),a.content=this.data(p+"-content"),a.handleClasses=[v.handle,v.handle.replace(e,t),n?v.handle.replace(e,n):"",a.handleGuid,l].join(" "),a.thisClasses=[v.nav.replace(e,t),n?v.nav.replace(e,n):"",l],a.contentClasses=[v.content.replace(e,t),l].join(" "),a.contentClassesOpen=[n?v.content.replace(e,n):"",v.open].join(" "),a.$nav=this.addClass(a.thisClasses.join(" ")).attr("role","navigation"),a.$handle=d(a.handle).addClass(a.handleClasses),a.$content=d(a.content).addClass(a.contentClasses),a.$animate=d().add(a.$nav).add(a.$content),function(a){if(a.label)if(1<a.$handle.length){a.originalLabel=[];for(var e=0,t=a.$handle.length;e<t;e++)a.originalLabel[e]=a.$handle.eq(e).html()}else a.originalLabel=a.$handle.html()}(a),a.navTabIndex=a.$nav.attr("tabindex"),a.$nav.attr("tabindex",-1),a.id=this.attr("id"),a.id?a.ariaId=a.id:(a.ariaId=a.rawGuid,this.attr("id",a.ariaId)),a.$handle.attr("data-swap-target",a.dotGuid).attr("data-swap-linked",a.handleGuid).attr("data-swap-group",v.base).attr("tabindex",0).on("activate.swap"+a.dotGuid,a,r).on("deactivate.swap"+a.dotGuid,a,c).on("enable.swap"+a.dotGuid,a,h).on("disable.swap"+a.dotGuid,a,u).on(m.focus+a.dotGuid,a,o).on(m.blur+a.dotGuid,a,i).fsSwap({maxWidth:a.maxWidth,classes:{target:a.dotGuid,enabled:f.enabled,active:f.open,raw:{target:a.rawGuid,enabled:v.enabled,active:v.open}}}),a.$handle.is("a, button")||a.$handle.on(m.keyPress+a.dotGuid,a,s)},_destruct:function(a){a.$content.removeClass([a.contentClasses,a.contentClassesOpen].join(" ")).off(m.namespace),a.$handle.removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("data-swap-target").removeData("swap-target").removeAttr("data-swap-linked").removeAttr("data-swap-group").removeData("swap-linked").removeData("tabindex").removeClass(a.handleClasses).off(a.dotGuid).html(a.originalLabel).fsSwap("destroy"),a.$nav.attr("tabindex",a.navTabIndex),l(a),n(a),this.removeAttr("aria-hidden").removeClass(a.thisClasses.join(" ")).off(m.namespace),this.attr("id")===a.rawGuid&&this.removeAttr("id")},open:function(a){a.$handle.fsSwap("activate")},close:t,enable:function(a){a.$handle.fsSwap("enable")},disable:function(a){a.$handle.fsSwap("disable")}}}),p=e.namespace,f=e.classes,v=f.raw,m=e.events,g=e.functions,$=null;a.Ready(function(){$=d("html, body")})});