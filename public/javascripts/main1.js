(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:2
	      },
	      1000:{
	        items:3
	      }
	    }
		});

	};
	carousel();

})(jQuery);

(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var owl = $('.featured-carouselll');

	$('.featured-carouselll').owlCarousel({
		animateOut: 'fadeOut',
		center: false,
		items: 1,
		loop: true,
		stagePadding: 0,
		margin: 0,
		smartSpeed: 1500,
		autoplay: false,
		dots: false,
		nav: false,
		navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	});

	$('.thumbnail li').each(function(slide_index){
		$(this).click(function(e) {
			owl.trigger('to.owl.carousel',[slide_index,1500]);
			e.preventDefault();
		})
	})

	owl.on('changed.owl.carousel', function(event) {
		$('.thumbnail li').removeClass('active');
		$('.thumbnail li').eq(event.item.index - 2).addClass('active');
	})

})(jQuery);
