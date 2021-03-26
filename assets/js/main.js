//preloader
$(window).on('load', function () {
	$('.status').fadeOut();
	$('#preloader').delay(500).fadeOut();
});

// typed
var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	typeSpeed: 70,
	loop: true,
	loopCount: Infinity,
});

$('.slider').slick({
	responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				infinite: true,
				autoplay: true,
				loop: true,
				speed: 300,
				autoplaySpeed: 2000,
			},
		},

		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
});
