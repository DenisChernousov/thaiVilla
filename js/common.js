$(document).ready(function () {
	$('.rental__slider,.villas__inner').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		respondTo: 'window',
		prevArrow: "<img src='images/right.svg' class='prev' alt='1'>",
		nextArrow: "<img src='images/right.svg' class='next' alt='2'>",
		responsive: [
			{
				breakpoint: 421,
				settings: {
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1
				
				}
			}
		]
	// });
	// $('.villas__inner').slick({
	// 	infinite: true,
	// 	slidesToShow: 2,
	// 	slidesToScroll: 2,
	// 	respondTo: 'window',
	// 	prevArrow: "<img src='images/right.svg' class='prev' alt='1'>",
	// 	nextArrow: "<img src='images/right.svg' class='next' alt='2'>"
	// 	responsive: [
	// 		{
	// 			breakpoint: 414,
	// 			settings: {
	// 				infinite: true,
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1
				
	// 			}
	// 		}
	// 	]
	});
});
