(function($) {
  "use strict";
	
	$("#language-portuguese").click(function() {
		$('.br').hide();
		$('.pt').show();
	});

	$("#language-brazilian-portuguese").click(function(){
		$('.pt').hide();
		$('.br').show();
	});
	
	$('#language-portuguese').click();

})(jQuery);
