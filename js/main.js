
// VERTICAL SCROLLING NAV
jQuery(document).ready(function($){
	var contentSections = $('.pg-section'),
		navigationItems = $('#pg-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //smooth scroll to second section
    $('.pg-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });


	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#pg-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			} else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});


// Toggle Chart
$('.trackingerror').on('click', function(event){
	$(this).toggleClass('inactive'); 
    $('.dot-trackingerror').toggleClass('inactive');   
});
$('.beta').on('click', function(event){
	$(this).toggleClass('inactive'); 
    $('.dot-beta').toggleClass('inactive');   
});
$('.rsquared').on('click', function(event){
	$(this).toggleClass('inactive'); 
    $('.dot-rsquared').toggleClass('inactive');   
});
$('.updown').on('click', function(event){
	$(this).toggleClass('inactive'); 
    $('.dot-updown').toggleClass('inactive');   
});
$('.highactive').on('click', function(event){
	$(this).toggleClass('inactive'); 
    $('.dot-highactive').toggleClass('inactive');   
});
$('.benchmark').on('click', function(event){
	$(this).toggleClass('inactive'); 
    $('.dot-benchmark').toggleClass('inactive');   
});
$('.etf').on('click', function(event){
	$(this).toggleClass('inactive'); 
    $('.dot-etf').toggleClass('inactive');   
});



/*
 * jQuery Bootstrap Responsive Tabs v2.0.1 | Valeriu Timbuc - vtimbuc.com
 * github.com/vtimbuc/bootstrap-responsive-tabs
 * @license WTFPL http://www.wtfpl.net/about/
 */
!function($){"use strict";var a={accordionOn:["xs"]};$.fn.responsiveTabs=function(e){var t=$.extend({},a,e),s="";return $.each(t.accordionOn,function(a,e){s+=" accordion-"+e}),this.each(function(){var a=$(this),e=a.find("> li > a"),t=$(e.first().attr("href")).parent(".tab-content"),i=t.children(".tab-pane");a.add(t).wrapAll('<div class="responsive-tabs-container" />');var n=a.parent(".responsive-tabs-container");n.addClass(s),e.each(function(a){var t=$(this),s=t.attr("href"),i="",n="",r="";t.parent("li").hasClass("active")&&(i=" active"),0===a&&(n=" first"),a===e.length-1&&(r=" last"),t.clone(!1).addClass("accordion-link"+i+n+r).insertBefore(s)});var r=t.children(".accordion-link");e.on("click",function(a){a.preventDefault();var e=$(this),s=e.parent("li"),n=s.siblings("li"),c=e.attr("href"),l=t.children('a[href="'+c+'"]');s.hasClass("active")||(s.addClass("active"),n.removeClass("active"),i.removeClass("active"),$(c).addClass("active"),r.removeClass("active"),l.addClass("active"))}),r.on("click",function(t){t.preventDefault();var s=$(this),n=s.attr("href"),c=a.find('li > a[href="'+n+'"]').parent("li");s.hasClass("active")||(r.removeClass("active"),s.addClass("active"),i.removeClass("active"),$(n).addClass("active"),e.parent("li").removeClass("active"),c.addClass("active"))})})}}(jQuery);
//# sourceMappingURL=./jquery.bootstrap-responsive-tabs.min.js.map

$('.responsive-tabs').responsiveTabs({
  accordionOn: ['xs'] // xs, sm, md, lg
});



(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top +100,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

$(window).scroll(function(event) {

  $(".paused-animation").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("inview"); 
    } else {
      el.removeClass("inview");
    }
  });

});

// $.fn.isInViewport = function() {
//   var elementTop = $(this).offset().top;
//   var elementBottom = elementTop + $(this).outerHeight();
//   var viewportTop = $(window).scrollTop();
//   var viewportBottom = viewportTop + $(window).height();

//   return elementBottom > viewportTop && elementTop < viewportBottom;
// };

// $(window).on('resize scroll', function() {
// 	$('.paused-animation').each(function() {
// 		var currentAnimation = $(this).attr('id');
// 		if ($(this).isInViewport()) {
// 			$(this).find( ".paused" ).removeClass('paused');
// 		} else {
// 		}
// 	});
// });
