$(document).ready(function () {
	$('.rental__slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		respondTo: 'window',
		prevArrow: "<img src='images/right.svg' class='prev' alt='1'>",
		nextArrow: "<img src='images/right.svg' class='next' alt='2'>"
	});
	$('.villas__inner').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		respondTo: 'window',
		prevArrow: "<img src='images/right.svg' class='prev' alt='1'>",
		nextArrow: "<img src='images/right.svg' class='next' alt='2'>"
	});
});
