$(document).ready(function() {
	// console.log('Hello surf!');

	var surfSlider = $('.surfSlider'),
		surfPrevBtn = $('#surfPrevBtn'),
		surfNextBtn = $('#surfNextBtn');

	surfSlider.owlCarousel({
		 	loop: true,
		 	smartSpeed: 500,
		 	dots: false,
		 	responsive: {
		 		0 : {
		 			items: 1,
		 		},

		 		1200 : {
		 			items: 3,
		 		}
		 	}
		 });

	surfPrevBtn.click(function(){
		surfSlider.trigger('prev.owl.carousel');
		// console.log('Prev Surf');
	});

	surfNextBtn.click(function(){
		surfSlider.trigger('next.owl.carousel');
		// console.log('Next Surf');
	});

});