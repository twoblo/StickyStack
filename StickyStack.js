/*
**********************************************************
* StickyStack.js
* 
* Version:		v1.1.1
* Author:		Mike Zarandona
* Release:		June 03 2014
* 				Added data-scrollto for section scrolling
* 
* Reqs:			jQuery
* 
* Usage:		$('.main-content-wrapper').stickyStack({
*					containerElement:	'.main-content-wrapper',
*					stackingElement:	'section',
*					boxShadow:			'0 -3px 20px rgba(0, 0, 0, 0.25)'
*				});
**********************************************************
*/
!function(t){t.fn.stickyStack=function(e){function n(t){for(var e=0,n=0;t>n;n++)e+=s.eq(n).outerHeight(!0);s.eq(0).parent().css("padding-top",e);for(var o=0;o<s.length;o++)t>0?(s.eq(o).addClass("stuck"),t--):s.eq(o).removeClass("stuck")}function o(){for(var t=0,e=0;e<s.length;e++)i[e]=[],i[e][1]=s.eq(e).outerHeight(!0),s.eq(e).attr("data-scrollto",s.eq(e).offset().top),s.eq(e).hasClass("stuck")?(i[e][0]=t,t+=i[e][1]):i[e][0]=s.eq(e).offset().top,s.eq(e).attr("data-scrollto",i[e][0]),s.eq(e).attr("data-height",i[e][1]);console.log(t)}e=t.extend({},t.fn.stickyStack.options,e);var s=t(e.containerElement+" > "+e.stackingElement),i=[],a=e.stackingElement+"{box-sizing: border-box;-moz-box-sizing: border-box;position: relative;z-index: 100;}"+e.stackingElement+".stuck {position: fixed;top: 0;z-index: 0;}"+e.stackingElement+".stuck + "+e.stackingElement+":not(.stuck) {box-shadow: "+e.boxShadow+";}";t("head").append('<style type="text/css">'+a+"</style>"),t(document).ready(function(){o();var t=s.eq(0).outerWidth(!0);s.css("width",t+"px")}),t(window).on("scroll",function(){for(var e=t(window).scrollTop(),o=0,a=0;a<s.length;a++)e>=i[a][0]&&o++;n(o)}),t(window).on("resize",function(){s.css("width",t(e.containerElement).width()+"px"),o()})},t.fn.stickyStack.options={containerElement:".main-content-wrapper",stackingElement:"section",boxShadow:"0 -3px 20px rgba(0, 0, 0, 0.25)"}}(jQuery);


$(window).load(function() {
  $('section').css('min-height', $(window).height());

  $('.main-content-wrapper').stickyStack();
});




// analytics
(function(d,e,j,h,f,c,b){d.GoogleAnalyticsObject=f;d[f]=d[f]||function(){(d[f].q=d[f].q||[]).push(arguments)},d[f].l=1*new Date();c=e.createElement(j),b=e.getElementsByTagName(j)[0];c.async=1;c.src=h;b.parentNode.insertBefore(c,b)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create","UA-53573814-1","auto");ga("send","pageview");
