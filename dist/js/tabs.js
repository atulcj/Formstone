/*! formstone v1.4.14 [tabs.js] 2019-07-03 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./swap"],t):t(jQuery,Formstone)}(function(o,n){"use strict";function s(t){if(!t.originalEvent){var e=t.data;e.$el.attr("aria-selected",!0).trigger(i.update,[0]),e.$mobileTab.addClass(m.active),e.$content.attr("aria-hidden",!1).addClass(m.active)}}function r(t){if(!t.originalEvent){var e=t.data;e.$el.attr("aria-selected",!1),e.$mobileTab.removeClass(m.active),e.$content.attr("aria-hidden",!0).removeClass(m.active)}}function d(t){var e=t.data;e.$el.attr("aria-controls",e.ariaContentId),e.$mobileTab.addClass(m.enabled),e.$content.attr("aria-labelledby",e.ariaId).addClass(m.enabled)}function l(t){var e=t.data;e.$el.removeAttr("aria-controls").removeAttr("aria-selected"),e.$mobileTab.removeClass(m.enabled),e.$content.removeAttr("aria-labelledby").removeAttr("aria-hidden").removeClass(m.enabled)}function e(t){t.data.$el.fsSwap("activate")}var t=n.Plugin("tabs",{widget:!0,defaults:{customClass:"",maxWidth:1/0,mobileMaxWidth:"740px",theme:"fs-light"},classes:["tab","tab_mobile","mobile","content","enabled","active"],events:{update:"update"},methods:{_construct:function(t){t.mq="(max-width:"+(t.mobileMaxWidth===1/0?"100000px":t.mobileMaxWidth)+")",t.content=this.attr("href"),t.group=this.data(c+"-group"),t.elementClasses=[m.tab,t.rawGuid,t.theme,t.customClass],t.mobileTabClasses=[m.tab,m.tab_mobile,t.rawGuid,t.theme,t.customClass],t.contentClasses=[m.content,t.rawGuid,t.theme,t.customClass],t.$mobileTab=o('<button type="button" class="'+t.mobileTabClasses.join(" ")+'" aria-hidden="true">'+this.html()+"</button>"),t.$content=o(t.content).addClass(t.contentClasses.join(" ")),t.$content.before(t.$mobileTab).attr("role","tabpanel"),this.attr("role","tab"),t.id=this.attr("id"),t.id?t.ariaId=t.id:(t.ariaId=t.rawGuid,this.attr("id",t.ariaId)),t.contentId=t.$content.attr("id"),t.contentGuid=t.rawGuid+"_content",t.contentId?t.ariacontentId=t.contentId:(t.ariaContentId=t.contentGuid,t.$content.attr("id",t.ariaContentId));var e=n.window.location.hash,a=!1,i=!1;e.length&&(a=0<this.filter("[href*='"+e+"']").length,i=t.group&&0<o("[data-"+c+'-group="'+t.group+'"]').filter("[href*='"+e+"']").length),a?this.attr("data-swap-active","true"):i?this.removeAttr("data-swap-active").removeData("data-swap-active"):"true"===this.attr("data-tabs-active")&&this.attr("data-swap-active","true"),this.attr("data-swap-target",t.content).attr("data-swap-group",t.group).addClass(t.elementClasses.join(" ")).on("activate.swap"+t.dotGuid,t,s).on("deactivate.swap"+t.dotGuid,t,r).on("enable.swap"+t.dotGuid,t,d).on("disable.swap"+t.dotGuid,t,l)},_postConstruct:function(t){this.fsSwap({maxWidth:t.maxWidth,classes:{target:t.dotGuid,enabled:a.enabled,active:a.active,raw:{target:t.rawGuid,enabled:m.enabled,active:m.active}},collapse:!1}),t.$mobileTab.on("click"+t.dotGuid,t,e),o.fsMediaquery("bind",t.rawGuid,t.mq,{enter:function(){(function(t){t.$el.addClass(m.mobile),t.$mobileTab.addClass(m.mobile),t.$content.addClass(m.mobile)}).call(t.$el,t)},leave:function(){(function(t){t.$el.removeClass(m.mobile),t.$mobileTab.removeClass(m.mobile),t.$content.removeClass(m.mobile)}).call(t.$el,t)}})},_destruct:function(t){o.fsMediaquery("unbind",t.rawGuid),t.$mobileTab.off(i.namespace).remove(),t.elementClasses.push(m.mobile),t.contentClasses.push(m.mobile),t.$content.removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass(t.contentClasses.join(" ")),t.$content.attr("id")===t.contentGuid&&t.$content.removeAttr("id"),this.removeAttr("aria-controls").removeAttr("aria-selected").removeAttr("data-swap-active").removeData("data-swap-active").removeAttr("data-swap-target").removeData("data-swap-target").removeAttr("data-swap-group").removeData("data-swap-group").removeAttr("role").removeClass(t.elementClasses.join(" ")).off(i.namespace).fsSwap("destroy"),this.attr("id")===t.rawGuid&&this.removeAttr("id")},activate:function(t){this.fsSwap("activate")},enable:function(t){this.fsSwap("enable")},disable:function(t){this.fsSwap("disable")}}}),c=t.namespace,a=t.classes,m=a.raw,i=t.events;t.functions});