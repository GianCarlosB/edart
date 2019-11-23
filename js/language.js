(function($) {
  'use strict';
	
	$('#language-brazilian-portuguese').click(function() {
		$('.br').show();
		$('.pt').hide();
        $('.es').hide();
		$('.fr').hide();
		$('.en').hide();
		$('#language-brazilian-portuguese').addClass('active-flag');
		$('#language-portuguese').removeClass('active-flag');
        $('#language-spanish').removeClass('active-flag');
		$('#language-french').removeClass('active-flag');
		$('#language-english').removeClass('active-flag');
		var currentSlide = $('#ensign-nivoslider').data('nivo:vars').currentSlide;
		if(currentSlide === 0 && $('#language-brazilian-portuguese').hasClass('active-flag')) {
			$('#navbar-logo').attr('style', 'visibility: hidden');
		}
	});
	
	$('#language-portuguese').click(function() {
		$('.br').hide();
		$('.pt').show();
        $('.es').hide();
		$('.fr').hide();
		$('.en').hide();
		$('#language-brazilian-portuguese').removeClass('active-flag');
		$('#language-portuguese').addClass('active-flag');
        $('#language-spanish').removeClass('active-flag');
		$('#language-french').removeClass('active-flag');
		$('#language-english').removeClass('active-flag');
		$('#navbar-logo').attr('style', 'visibility: visible');
	});
    
	$('#language-spanish').click(function() {
		$('.br').hide();
		$('.pt').hide();
        $('.es').show();
		$('.fr').hide();
		$('.en').hide();
		$('#language-brazilian-portuguese').removeClass('active-flag');
		$('#language-portuguese').removeClass('active-flag');
        $('#language-spanish').addClass('active-flag');
		$('#language-french').removeClass('active-flag');
		$('#language-english').removeClass('active-flag');
		$('#navbar-logo').attr('style', 'visibility: visible');
	});
	
	$('#language-french').click(function() {
		$('.br').hide();
		$('.pt').hide();
        $('.es').hide();
		$('.fr').show();
		$('.en').hide();
		$('#language-brazilian-portuguese').removeClass('active-flag');
		$('#language-portuguese').removeClass('active-flag');
        $('#language-spanish').removeClass('active-flag');
		$('#language-french').addClass('active-flag');
		$('#language-english').removeClass('active-flag');
		$('#navbar-logo').attr('style', 'visibility: visible');
	});
	
	$('#language-english').click(function() {
		$('.br').hide();
		$('.pt').hide();
        $('.es').hide();
		$('.fr').hide();
		$('.en').show();
		$('#language-brazilian-portuguese').removeClass('active-flag');
		$('#language-portuguese').removeClass('active-flag');
        $('#language-spanish').removeClass('active-flag');
		$('#language-french').removeClass('active-flag');
		$('#language-english').addClass('active-flag');
		$('#navbar-logo').attr('style', 'visibility: visible');
	});
	
	$('#language-brazilian-portuguese').click();

})(jQuery);
