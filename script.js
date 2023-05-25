$('.cube-switch .switch').click(function () {
	if ($('.cube-switch').hasClass('active')) {
		$('.cube-switch').removeClass('active');
		$('#light-bulb2').css({
			'opacity': '0'
		});
		$('.lamp-bulb, .lamp-bulb2').css('background', '#b2b2b2');
		$('.lamp-light, .lamp-light2').removeClass('onito');
		$('.carousel-inner').removeClass('portfoshadow');
		$('.first').carousel('pause');

	} else {
		$('.cube-switch').addClass('active');
		$('#light-bulb2').css({
			'opacity': '1'
		});
		$('.lamp-bulb, .lamp-bulb2').css('background', '#fbf8e6');
		$('.lamp-light, .lamp-light2').addClass('onito');
		$('.carousel-inner').addClass('portfoshadow');

		$('.first').carousel('cycle');


	}
});