$(document).ready(function() {
	console.log('Hello!');

	var headerSlider = $('.headerSlider'),
		prevBtn = $('#headerSliderPrevBtn'),
		nextBtn = $('#headerSliderNextBtn');


	headerSlider.on('initialized.owl.carousel', function(event) {
		$('.current-num').text(event.item.index + 1);
		$('.total-num').text(event.item.count);
	});

	headerSlider.owlCarousel({
		 	items: 1,
		 	smartSpeed: 2000,
		 	dots: false
		 });

	prevBtn.click(function(){
		headerSlider.trigger('prev.owl.carousel');
		console.log('Prev');
	});

	nextBtn.click(function(){
		headerSlider.trigger('next.owl.carousel');
		console.log('Next');
	});

	headerSlider.on('changed.owl.carousel', function(event) {
		$('.current-num').text(event.item.index + 1);
		$('.total-num').text(event.item.count);
	});

});