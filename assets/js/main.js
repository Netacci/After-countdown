//preloader
$(window).on('load', function () {
  $('.status').fadeOut();
  $('#preloader').delay(500).fadeOut();
});

// typed
// var typed = new Typed('#typed', {
// 	stringsElement: '#typed-strings',
// 	typeSpeed: 70,
// 	loop: true,
// 	loopCount: Infinity,
// });

$('.slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  loop: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  // responsive: [
  // 	{
  // 		breakpoint: 1024,
  // 		settings: {
  // 			slidesToShow: 1,
  // 			slidesToScroll: 1,
  // 			infinite: true,

  // 			arrows: false,
  // 		},
  // 	},
  // 	{
  // 		breakpoint: 600,
  // 		settings: {
  // 			slidesToShow: 1,
  // 			slidesToScroll: 1,
  // 			dots: true,
  // 		},
  // 	},
  // 	{
  // 		breakpoint: 480,
  // 		settings: {
  // 			slidesToShow: 1,
  // 			slidesToScroll: 1,
  // 			dots: true,
  // 		},
  // 	},
  // 	// You can unslick at a given breakpoint now by adding:
  // 	// settings: "unslick"
  // 	// instead of a settings object
  // ],
});
