$(document).ready(function() {
	//GALLERY
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});

	//FILTER
	$('.filtr-container').filterizr({
		animationDuration: 0.5, //in seconds
		filter: 'all', //Initial filter
		delay: 0, //Transition delay in ms
		delayMode: 'progressive', //'progressive' or 'alternate'
		easing: 'ease-in-out',
		filterOutCss: { //Filtering out animation
			opacity: 0,
			transform: 'scale(0.5)'
		},
		filterInCss: { //Filtering in animation
			opacity: 1,
			transform: 'scale(1)'
		},
		layout: 'sameSize', //See layouts
		selector: '.filtr-container',
		setupControls: true
	});

	// SCROLL
	$('a[data-page]').on('click', function() {
		var page = $(this).attr('data-page');
		$.smoothScroll({
			scrollTarget: '#'+page,
			offset: -50,
		});
		return false;
	});
});
