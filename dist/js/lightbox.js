/*! formstone v1.4.0 [lightbox.js] 2017-08-24 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./touch","./transition","./viewer"],t):t(jQuery,Formstone)}(function(t,i){"use strict";function e(e){if(!Z){var n=e.data;(Z=t.extend({},{visible:!1,gallery:{active:!1},isMobile:i.isMobile||n.mobile,isTouch:i.support.touch,isAnimating:!0,isZooming:!1,oldContentHeight:0,oldContentWidth:0,metaHeight:0,thumbnailHeight:0,captionOpen:!1,thumbnailsOpen:!1,tapTimer:null},n)).isViewer=Z.isMobile&&n.viewer&&void 0!==t.fn.fsViewer;var a=n.$el,l=n.$object,g=a&&a[0].href?a[0].href||"":"",d=a&&a[0].hash?a[0].hash||"":"",c=(g.toLowerCase().split(".").pop().split(/\#|\?/),a?a.data(P+"-type"):""),p="image"===c||g.match(n.fileTypes)||"data:image"===g.substr(0,10),u=z(g),v="url"===c||!p&&!u&&"http"===g.substr(0,4)&&!d,H="element"===c||!p&&!u&&!v&&"#"===d.substr(0,1),w=void 0!==l;if(H&&(g=d),!(p||u||v||H||w))return void(Z=null);if(B.killEvent(e),Z.margin*=2,Z.type=p?"image":u?"video":"element",p||u){var W=a.data(P+"-gallery");W&&(Z.gallery.active=!0,Z.gallery.id=W,Z.gallery.$items=t("a[data-lightbox-gallery= "+Z.gallery.id+"], a[rel= "+Z.gallery.id+"]"),Z.gallery.index=Z.gallery.$items.index(Z.$el),Z.gallery.total=Z.gallery.$items.length-1)}Z.thumbnails&&(p||u)&&Z.gallery.active||(Z.thumbnails=!1);var y="";Z.isMobile||(y+='<div class="'+[R.overlay,Z.theme,Z.customClass].join(" ")+'"></div>');var I=[R.base,R.loading,R.animating,Z.theme,Z.customClass];if(Z.fixed&&I.push(R.fixed),Z.isMobile&&I.push(R.mobile),Z.isTouch&&I.push(R.touch),v&&I.push(R.iframed),(H||w)&&I.push(R.inline),Z.thumbnails&&I.push(R.thumbnailed),y+='<div class="'+I.join(" ")+'" role="dialog" aria-label="lightbox" tabindex="-1">',y+='<button type="button" class="'+R.close+'">'+Z.labels.close+"</button>",y+='<span class="'+R.loading_icon+'"></span>',y+='<div class="'+R.container+'">',Z.gallery.active&&Z.thumbnails){y+='<div class="'+[R.thumbnails]+'">',y+='<div class="'+[R.thumbnail_container]+'">';for(var M,k,j=0,L=Z.gallery.$items.length;j<L;j++)(k=(M=Z.gallery.$items.eq(j)).data("lightbox-thumbnail"))||(k=M.find("img").attr("src")),y+='<button class="'+[R.thumbnail_item]+'">',y+='<img src="'+k+'" alt="">',y+="</button>";y+="</div></div>"}y+='<div class="'+R.content+'"></div>',(p||u)&&(y+='<div class="'+R.tools+'">',y+='<div class="'+R.controls+'">',Z.gallery.active&&(y+='<button type="button" class="'+[R.control,R.control_previous].join(" ")+'">'+Z.labels.previous+"</button>",y+='<button type="button" class="'+[R.control,R.control_next].join(" ")+'">'+Z.labels.next+"</button>"),Z.isMobile&&Z.isTouch&&(y+='<button type="button" class="'+[R.toggle,R.caption_toggle].join(" ")+'">'+Z.labels.captionClosed+"</button>",Z.gallery.active&&Z.thumbnails&&(y+='<button type="button" class="'+[R.toggle,R.thumbnail_toggle].join(" ")+'">'+Z.labels.thumbnailsClosed+"</button>")),y+="</div>",y+='<div class="'+R.meta+'">',y+='<div class="'+R.meta_content+'">',Z.gallery.active&&(y+='<p class="'+R.position+'"',Z.gallery.total<1&&(y+=' style="display: none;"'),y+=">",y+='<span class="'+R.position_current+'">'+(Z.gallery.index+1)+"</span> ",y+=Z.labels.count,y+=' <span class="'+R.position_total+'">'+(Z.gallery.total+1)+"</span>",y+="</p>"),y+='<div class="'+R.caption+'">',y+=Z.formatter.call(a,n),y+="</div></div></div>",y+="</div>"),y+="</div></div>",D.append(y),Z.$overlay=t(E.overlay),Z.$lightbox=t(E.base),Z.$close=t(E.close),Z.$container=t(E.container),Z.$content=t(E.content),Z.$tools=t(E.tools),Z.$meta=t(E.meta),Z.$metaContent=t(E.meta_content),Z.$position=t(E.position),Z.$caption=t(E.caption),Z.$controlBox=t(E.controls),Z.$controls=t(E.control),Z.$thumbnails=t(E.thumbnails),Z.$thumbnailContainer=t(E.thumbnail_container),Z.$thumbnailItems=t(E.thumbnail_item),Z.isMobile?(Z.paddingVertical=Z.$close.outerHeight(),Z.paddingHorizontal=0,Z.mobilePaddingVertical=parseInt(Z.$content.css("paddingTop"),10)+parseInt(Z.$content.css("paddingBottom"),10),Z.mobilePaddingHorizontal=parseInt(Z.$content.css("paddingLeft"),10)+parseInt(Z.$content.css("paddingRight"),10)):(Z.paddingVertical=parseInt(Z.$lightbox.css("paddingTop"),10)+parseInt(Z.$lightbox.css("paddingBottom"),10),Z.paddingHorizontal=parseInt(Z.$lightbox.css("paddingLeft"),10)+parseInt(Z.$lightbox.css("paddingRight"),10),Z.mobilePaddingVertical=0,Z.mobilePaddingHorizontal=0),Z.contentHeight=Z.$lightbox.outerHeight()-Z.paddingVertical,Z.contentWidth=Z.$lightbox.outerWidth()-Z.paddingHorizontal,Z.controlHeight=Z.$controls.outerHeight(),r(),Z.gallery.active&&(Z.$lightbox.addClass(R.has_controls),x()),K.on(A.keyDown,C),D.on(A.click,[E.overlay,E.close].join(", "),o).on([A.focus,A.focusIn].join(" "),O),Z.gallery.active&&Z.$lightbox.on(A.click,E.control,$),Z.thumbnails&&Z.$lightbox.on(A.click,E.thumbnail_item,f),Z.isMobile&&Z.isTouch&&Z.$lightbox.on(A.click,E.caption_toggle,s).on(A.click,E.thumbnail_toggle,h),Z.$lightbox.fsTransition({property:"opacity"},function(){p?m(g):u?b(g):v?V(g):H?_(g):w&&T(Z.$object)}).addClass(R.open),Z.$overlay.addClass(R.open)}}function n(t){"object"!=typeof t&&(Z.targetHeight=arguments[0],Z.targetWidth=arguments[1]),"element"===Z.type?M(Z.$content.find("> :first-child")):"image"===Z.type?p():"video"===Z.type&&v(),l()}function o(t){B.killEvent(t),Z&&(Z.$lightbox.fsTransition("destroy"),Z.$content.fsTransition("destroy"),Z.$lightbox.addClass(R.animating).fsTransition({property:"opacity"},function(t){void 0!==Z.$inlineTarget&&Z.$inlineTarget.length&&I(),Z.isViewer&&Z.$imageContainer&&Z.$imageContainer.length&&Z.$imageContainer.fsViewer("destroy"),Z.$lightbox.off(A.namespace),Z.$container.off(A.namespace),K.off(A.keyDown),D.off(A.namespace),D.off(A.namespace),Z.$overlay.remove(),Z.$lightbox.remove(),void 0!==Z.$el&&Z.$el&&Z.$el.length&&Z.$el.focus(),Z=null,K.trigger(A.close)}),Z.$lightbox.removeClass(R.open),Z.$overlay.removeClass(R.open),Z.isMobile&&(N.removeClass(R.lock),B.unlockViewport(P)))}function a(){var t=g();Z.isMobile||Z.duration;Z.isMobile?B.lockViewport(P):Z.$controls.css({marginTop:(Z.contentHeight-Z.controlHeight-Z.metaHeight+Z.thumbnailHeight)/2}),""===Z.$caption.html()?(Z.$caption.hide(),Z.$lightbox.removeClass(R.has_caption),Z.gallery.active||Z.$tools.hide()):(Z.$caption.show(),Z.$lightbox.addClass(R.has_caption)),Z.$lightbox.fsTransition({property:Z.contentHeight!==Z.oldContentHeight?"height":"width"},function(){Z.$content.fsTransition({property:"opacity"},function(){Z.$lightbox.removeClass(R.animating),Z.isAnimating=!1}),Z.$lightbox.removeClass(R.loading).addClass(R.ready),Z.visible=!0,K.trigger(A.open),Z.gallery.active&&(H(),w(),W()),Z.$lightbox.focus()}),Z.isMobile||Z.$lightbox.css({height:Z.contentHeight+Z.paddingVertical,width:Z.contentWidth+Z.paddingHorizontal,top:Z.fixed?0:t.top});var i=Z.oldContentHeight!==Z.contentHeight||Z.oldContentWidth!==Z.contentWidth;!Z.isMobile&&i||Z.$lightbox.fsTransition("resolve"),Z.oldContentHeight=Z.contentHeight,Z.oldContentWidth=Z.contentWidth,Z.isMobile&&N.addClass(R.lock)}function l(){if(Z.visible&&!Z.isMobile){var t=g();Z.$controls.css({marginTop:(Z.contentHeight-Z.controlHeight-Z.metaHeight+Z.thumbnailHeight)/2}),Z.$lightbox.css({height:Z.contentHeight+Z.paddingVertical,width:Z.contentWidth+Z.paddingHorizontal,top:Z.fixed?0:t.top}),Z.oldContentHeight=Z.contentHeight,Z.oldContentWidth=Z.contentWidth}}function r(){var t=g();Z.$lightbox.css({top:Z.fixed?0:t.top})}function g(){if(Z.isMobile)return{left:0,top:0};var t={left:(i.windowWidth-Z.contentWidth-Z.paddingHorizontal)/2,top:Z.top<=0?(i.windowHeight-Z.contentHeight-Z.paddingVertical)/2:Z.top};return!0!==Z.fixed&&(t.top+=K.scrollTop()),t}function s(t){if(B.killEvent(t),Z.captionOpen)d();else{c();var i=parseInt(Z.$metaContent.outerHeight(!0));i+=parseInt(Z.$meta.css("padding-top")),i+=parseInt(Z.$meta.css("padding-bottom")),Z.$meta.css({height:i}),Z.$lightbox.addClass(R.caption_open).find(E.caption_toggle).text(Z.labels.captionOpen),Z.captionOpen=!0}}function d(){Z.$lightbox.removeClass(R.caption_open).find(E.caption_toggle).text(Z.labels.captionClosed),Z.captionOpen=!1}function h(t){B.killEvent(t),Z.thumbnailsOpen?c():(d(),Z.$lightbox.addClass(R.thumbnails_open).find(E.thumbnail_toggle).text(Z.labels.thumbnailsOpen),Z.thumbnailsOpen=!0)}function c(){Z.$lightbox.removeClass(R.thumbnails_open).find(E.thumbnail_toggle).text(Z.labels.thumbnailsClosed),Z.thumbnailsOpen=!1}function m(i){Z.isViewer?(Z.$imageContainer=t('<div class="'+R.image_container+'"><img></div>'),Z.$image=Z.$imageContainer.find("img"),Z.$image.attr("src",i).addClass(R.image),Z.$content.prepend(Z.$imageContainer),p(),Z.$imageContainer.one("loaded.viewer",function(){a()}).fsViewer({theme:Z.theme})):(Z.$imageContainer=t('<div class="'+R.image_container+'"><img></div>'),Z.$image=Z.$imageContainer.find("img"),Z.$image.one(A.load,function(){var t=j(Z.$image);Z.naturalHeight=t.naturalHeight,Z.naturalWidth=t.naturalWidth,Z.retina&&(Z.naturalHeight/=2,Z.naturalWidth/=2),Z.$content.prepend(Z.$imageContainer),p(),a()}).on(A.error,k).attr("src",i).addClass(R.image),(Z.$image[0].complete||4===Z.$image[0].readyState)&&Z.$image.trigger(A.load))}function p(){if(Z.$image){var t=0;for(Z.windowHeight=Z.viewportHeight=i.windowHeight-Z.mobilePaddingVertical-Z.paddingVertical,Z.windowWidth=Z.viewportWidth=i.windowWidth-Z.mobilePaddingHorizontal-Z.paddingHorizontal,Z.contentHeight=1/0,Z.contentWidth=1/0,Z.imageMarginTop=0,Z.imageMarginLeft=0;Z.contentHeight>Z.viewportHeight&&t<2;)Z.imageHeight=0===t?Z.naturalHeight:Z.$image.outerHeight(),Z.imageWidth=0===t?Z.naturalWidth:Z.$image.outerWidth(),Z.metaHeight=0===t?0:Z.metaHeight,Z.spacerHeight=0===t?0:Z.spacerHeight,Z.thumbnailHeight=0===t?0:Z.thumbnailHeight,0===t&&(Z.ratioHorizontal=Z.imageHeight/Z.imageWidth,Z.ratioVertical=Z.imageWidth/Z.imageHeight,Z.isWide=Z.imageWidth>Z.imageHeight),Z.imageHeight<Z.minHeight&&(Z.minHeight=Z.imageHeight),Z.imageWidth<Z.minWidth&&(Z.minWidth=Z.imageWidth),Z.isMobile?(Z.isTouch?(Z.$controlBox.css({width:i.windowWidth}),Z.spacerHeight=Z.$controls.outerHeight(!0)):(Z.$tools.css({width:i.windowWidth}),Z.spacerHeight=Z.$tools.outerHeight(!0)),Z.contentHeight=Z.viewportHeight,Z.contentWidth=Z.viewportWidth,Z.isTouch||Z.$content.css({height:Z.contentHeight-Z.spacerHeight}),Z.$thumbnails.length&&(Z.spacerHeight+=Z.$thumbnails.outerHeight(!0)),Z.spacerHeight+=10,u(),Z.imageMarginTop=(Z.contentHeight-Z.targetImageHeight-Z.spacerHeight)/2,Z.imageMarginLeft=(Z.contentWidth-Z.targetImageWidth)/2):(0===t&&(Z.viewportHeight-=Z.margin+Z.paddingVertical,Z.viewportWidth-=Z.margin+Z.paddingHorizontal),Z.viewportHeight-=Z.metaHeight,Z.thumbnails&&(Z.viewportHeight-=Z.thumbnailHeight),u(),Z.contentHeight=Z.targetImageHeight,Z.contentWidth=Z.targetImageWidth),Z.isMobile||Z.isTouch||Z.$meta.css({width:Z.contentWidth}),Z.$image.css({height:Z.targetImageHeight,width:Z.targetImageWidth,marginTop:Z.imageMarginTop,marginLeft:Z.imageMarginLeft}),Z.isMobile||(Z.metaHeight=Z.$meta.outerHeight(!0),Z.contentHeight+=Z.metaHeight),Z.thumbnails&&(Z.thumbnailHeight=Z.$thumbnails.outerHeight(!0),Z.contentHeight+=Z.thumbnailHeight),t++}}function u(){var t=Z.isMobile?Z.contentHeight-Z.spacerHeight:Z.viewportHeight,i=Z.isMobile?Z.contentWidth:Z.viewportWidth;Z.isWide?(Z.targetImageWidth=i,Z.targetImageHeight=Z.targetImageWidth*Z.ratioHorizontal,Z.targetImageHeight>t&&(Z.targetImageHeight=t,Z.targetImageWidth=Z.targetImageHeight*Z.ratioVertical)):(Z.targetImageHeight=t,Z.targetImageWidth=Z.targetImageHeight*Z.ratioVertical,Z.targetImageWidth>i&&(Z.targetImageWidth=i,Z.targetImageHeight=Z.targetImageWidth*Z.ratioHorizontal)),(Z.targetImageWidth>Z.imageWidth||Z.targetImageHeight>Z.imageHeight)&&(Z.targetImageHeight=Z.imageHeight,Z.targetImageWidth=Z.imageWidth),(Z.targetImageWidth<Z.minWidth||Z.targetImageHeight<Z.minHeight)&&(Z.targetImageWidth<Z.minWidth?(Z.targetImageWidth=Z.minWidth,Z.targetImageHeight=Z.targetImageWidth*Z.ratioHorizontal):(Z.targetImageHeight=Z.minHeight,Z.targetImageWidth=Z.targetImageHeight*Z.ratioVertical))}function b(i){var e=z(i),n=i.split("?");e?(n.length>=2&&(e+="?"+n.slice(1)[0].trim()),Z.$videoWrapper=t('<div class="'+R.video_wrapper+'"></div>'),Z.$video=t('<iframe class="'+R.video+'" frameborder="0" seamless="seamless" allowfullscreen></iframe>'),Z.$video.attr("src",e).addClass(R.video).prependTo(Z.$videoWrapper),Z.$content.prepend(Z.$videoWrapper),v(),a()):k()}function v(){Z.windowHeight=Z.viewportHeight=i.windowHeight-Z.mobilePaddingVertical-Z.paddingVertical,Z.windowWidth=Z.viewportWidth=i.windowWidth-Z.mobilePaddingHorizontal-Z.paddingHorizontal,Z.videoMarginTop=0,Z.videoMarginLeft=0,Z.isMobile?(Z.isTouch?(Z.$controlBox.css({width:i.windowWidth}),Z.spacerHeight=Z.$controls.outerHeight(!0)+10):(Z.$tools.css({width:i.windowWidth}),Z.spacerHeight=Z.$tools.outerHeight(!0),Z.spacerHeight+=Z.$thumbnails.outerHeight(!0)+10),Z.viewportHeight-=Z.spacerHeight,Z.targetVideoWidth=Z.viewportWidth,Z.targetVideoHeight=Z.targetVideoWidth*Z.videoRatio,Z.targetVideoHeight>Z.viewportHeight&&(Z.targetVideoHeight=Z.viewportHeight,Z.targetVideoWidth=Z.targetVideoHeight/Z.videoRatio),Z.videoMarginTop=(Z.viewportHeight-Z.targetVideoHeight)/2,Z.videoMarginLeft=(Z.viewportWidth-Z.targetVideoWidth)/2):(Z.viewportHeight=Z.windowHeight-Z.margin,Z.viewportWidth=Z.windowWidth-Z.margin,Z.targetVideoWidth=Z.videoWidth>Z.viewportWidth?Z.viewportWidth:Z.videoWidth,Z.targetVideoWidth<Z.minWidth&&(Z.targetVideoWidth=Z.minWidth),Z.targetVideoHeight=Z.targetVideoWidth*Z.videoRatio,Z.contentHeight=Z.targetVideoHeight,Z.contentWidth=Z.targetVideoWidth),Z.isMobile||Z.isTouch||Z.$meta.css({width:Z.contentWidth}),Z.$videoWrapper.css({height:Z.targetVideoHeight,width:Z.targetVideoWidth,marginTop:Z.videoMarginTop,marginLeft:Z.videoMarginLeft}),Z.isMobile||(Z.metaHeight=Z.$meta.outerHeight(!0),Z.contentHeight+=Z.metaHeight),Z.thumbnails&&(Z.thumbnailHeight=Z.$thumbnails.outerHeight(!0),Z.contentHeight+=Z.thumbnailHeight)}function H(i){var e="";Z.gallery.index>0&&(z(e=Z.gallery.$items.eq(Z.gallery.index-1).attr("href"))||t('<img src="'+e+'">')),Z.gallery.index<Z.gallery.total&&(z(e=Z.gallery.$items.eq(Z.gallery.index+1).attr("href"))||t('<img src="'+e+'">'))}function $(i){B.killEvent(i);var e=t(i.currentTarget);Z.isAnimating||e.hasClass(R.control_disabled)||(Z.isAnimating=!0,d(),Z.gallery.index+=e.hasClass(R.control_next)?1:-1,Z.gallery.index>Z.gallery.total&&(Z.gallery.index=Z.infinite?0:Z.gallery.total),Z.gallery.index<0&&(Z.gallery.index=Z.infinite?Z.gallery.total:0),w(),Z.$lightbox.addClass(R.animating),Z.$content.fsTransition({property:"opacity"},y),Z.$lightbox.addClass(R.loading))}function f(i){B.killEvent(i);var e=t(i.currentTarget);Z.isAnimating||e.hasClass(R.active)||(Z.isAnimating=!0,d(),Z.gallery.index=Z.$thumbnailItems.index(e),w(),Z.$lightbox.addClass(R.animating),Z.$content.fsTransition({property:"opacity"},y),Z.$lightbox.addClass(R.loading))}function w(){if(Z.thumbnails){var t=Z.$thumbnailItems.eq(Z.gallery.index);Z.$thumbnailItems.removeClass(R.active),t.addClass(R.active)}}function W(){if(Z.thumbnails){var t=Z.$thumbnailItems.eq(Z.gallery.index),i=t.position().left+t.outerWidth(!1)/2-Z.$thumbnailContainer.outerWidth(!0)/2;Z.$thumbnailContainer.stop().animate({scrollLeft:i},200,"linear")}}function y(){void 0!==Z.$imageContainer&&(Z.isViewer&&Z.$imageContainer.fsViewer("destroy"),Z.$imageContainer.remove()),void 0!==Z.$videoWrapper&&Z.$videoWrapper.remove(),Z.$el=Z.gallery.$items.eq(Z.gallery.index),Z.$caption.html(Z.formatter.call(Z.$el,Z)),Z.$position.find(E.position_current).html(Z.gallery.index+1);var t=Z.$el.attr("href");z(t)?(Z.type="video",b(t)):(Z.type="image",m(t)),x()}function x(){Z.$controls.removeClass(R.control_disabled),Z.infinite||(0===Z.gallery.index&&Z.$controls.filter(E.control_previous).addClass(R.control_disabled),Z.gallery.index===Z.gallery.total&&Z.$controls.filter(E.control_next).addClass(R.control_disabled))}function C(t){!Z.gallery.active||37!==t.keyCode&&39!==t.keyCode?27===t.keyCode&&Z.$close.trigger(A.click):(B.killEvent(t),Z.$controls.filter(37===t.keyCode?E.control_previous:E.control_next).trigger(A.click))}function _(i){Z.$inlineTarget=t(i),Z.$inlineContents=Z.$inlineTarget.children().detach(),T(Z.$inlineContents)}function I(){Z.$inlineTarget.append(Z.$inlineContents.detach())}function V(i){i+=i.indexOf("?")>-1?"&"+Z.requestKey+"=true":"?"+Z.requestKey+"=true",T(t('<iframe class="'+R.iframe+'" src="'+i+'"></iframe>'))}function T(t){Z.$content.append(t),M(t),a()}function M(t){Z.windowHeight=i.windowHeight-Z.mobilePaddingVertical-Z.paddingVertical,Z.windowWidth=i.windowWidth-Z.mobilePaddingHorizontal-Z.paddingHorizontal,Z.objectHeight=t.outerHeight(!0),Z.objectWidth=t.outerWidth(!0),Z.targetHeight=Z.targetHeight||(Z.$el?Z.$el.data(P+"-height"):null),Z.targetWidth=Z.targetWidth||(Z.$el?Z.$el.data(P+"-width"):null),Z.maxHeight=Z.windowHeight<0?Z.minHeight:Z.windowHeight,Z.isIframe=t.is("iframe"),Z.objectMarginTop=0,Z.objectMarginLeft=0,Z.isMobile||(Z.windowHeight-=Z.margin,Z.windowWidth-=Z.margin),Z.contentHeight=Z.targetHeight?Z.targetHeight:Z.isIframe||Z.isMobile?Z.windowHeight:Z.objectHeight,Z.contentWidth=Z.targetWidth?Z.targetWidth:Z.isIframe||Z.isMobile?Z.windowWidth:Z.objectWidth,(Z.isIframe||Z.isObject)&&Z.isMobile?(Z.contentHeight=Z.windowHeight,Z.contentWidth=Z.windowWidth):Z.isObject&&(Z.contentHeight=Z.contentHeight>Z.windowHeight?Z.windowHeight:Z.contentHeight,Z.contentWidth=Z.contentWidth>Z.windowWidth?Z.windowWidth:Z.contentWidth),Z.isMobile||(Z.contentHeight>Z.maxHeight&&(Z.contentHeight=Z.maxHeight),Z.contentWidth>Z.maxWidth&&(Z.contentWidth=Z.maxWidth))}function k(){var i=t('<div class="'+R.error+'"><p>Error Loading Resource</p></div>');Z.type="element",Z.$tools.remove(),Z.$image.off(A.namespace),T(i),K.trigger(A.error)}function j(t){var i=t[0],e=new Image;return void 0!==i.naturalHeight?{naturalHeight:i.naturalHeight,naturalWidth:i.naturalWidth}:"img"===i.tagName.toLowerCase()&&(e.src=i.src,{naturalHeight:e.height,naturalWidth:e.width})}function z(t){var i,e=Z.videoFormatter;for(var n in e)if(e.hasOwnProperty(n)&&null!==(i=t.match(e[n].pattern)))return e[n].format.call(Z,i);return!1}function O(i){var e=i.target;t.contains(Z.$lightbox[0],e)||e===Z.$lightbox[0]||e===Z.$overlay[0]||(B.killEvent(i),Z.$lightbox.focus())}var L=i.Plugin("lightbox",{widget:!0,defaults:{customClass:"",fileTypes:/\.(jpg|sjpg|jpeg|png|gif)$/i,fixed:!1,formatter:function(){var t=this.attr("title"),i=!(void 0===t||!t)&&t.replace(/^\s+|\s+$/g,"");return i?'<p class="caption">'+i+"</p>":""},infinite:!1,labels:{close:"Close",count:"of",next:"Next",previous:"Previous",captionClosed:"View Caption",captionOpen:"Close Caption",thumbnailsClosed:"View Thumbnails",thumbnailsOpen:"Close Thumbnails"},margin:50,maxHeight:1e4,maxWidth:1e4,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"fs-lightbox",theme:"fs-light",thumbnails:!1,top:0,videoFormatter:{youtube:{pattern:/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,format:function(t){return"//www.youtube.com/embed/"+t[1]}},vimeo:{pattern:/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,format:function(t){return"//player.vimeo.com/video/"+t[3]}}},videoRatio:.5625,videoWidth:800,viewer:!0},classes:["loading","animating","fixed","mobile","touch","inline","iframed","open","ready","overlay","close","loading_icon","container","content","image","image_container","video","video_wrapper","tools","meta","meta_content","controls","control","control_previous","control_next","control_disabled","position","position_current","position_total","toggle","caption_toggle","caption","caption_open","thumbnailed","thumbnails_open","thumbnail_toggle","thumbnails","thumbnail_container","thumbnail_item","active","has_controls","has_caption","iframe","error","active","lock"],events:{open:"open",close:"close"},methods:{_setup:function(){D=i.$body,N=t("html, body"),Q=i.window.location.hash.replace("#","")},_construct:function(t){this.on(A.click,t,e);var i=this.data(P+"-gallery");!S&&Q&&i===Q&&(S=!0,this.trigger(A.click))},_destruct:function(t){o(),this.off(A.namespace)},_resize:function(){Z&&n()},resize:n},utilities:{_initialize:function(i,n){i instanceof t&&e.apply(F,[{data:t.extend(!0,{},{$object:i},q,n||{})}])},close:o}}),P=L.namespace,q=L.defaults,E=L.classes,R=E.raw,A=L.events,B=L.functions,F=i.window,K=i.$window,D=null,N=null,Q=!1,S=!1,Z=null});