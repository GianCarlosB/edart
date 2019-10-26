(function($) {
  'use strict';
	
	$('#language-brazilian-portuguese').click(function() {
		$('.br').show();
		$('.pt').hide();
		$('.en').hide();
		$('#language-brazilian-portuguese').addClass('active-flag');
		$('#language-portuguese').removeClass('active-flag');
		$('#language-english').removeClass('active-flag');
	});
	
	$('#language-portuguese').click(function() {
		$('.br').hide();
		$('.pt').show();
		$('.en').hide();
		$('#language-brazilian-portuguese').removeClass('active-flag');
		$('#language-portuguese').addClass('active-flag');
		$('#language-english').removeClass('active-flag');
	});
	
	$('#language-english').click(function() {
		$('.br').hide();
		$('.pt').hide();
		$('.en').show();
		$('#language-brazilian-portuguese').removeClass('active-flag');
		$('#language-portuguese').removeClass('active-flag');
		$('#language-english').addClass('active-flag');
	});
	
	$('#language-brazilian-portuguese').click();

})(jQuery);
