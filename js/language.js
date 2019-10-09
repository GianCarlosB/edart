(function($) {
  "use strict";
	
	$("#language-portuguese").click(function() {
		$('.br').hide();
		$('.pt').show();
		$('#language-portuguese').addClass("active-flag");
		$('#language-brazilian-portuguese').removeClass("active-flag");
	});

	$("#language-brazilian-portuguese").click(function(){
		$('.pt').hide();
		$('.br').show();
		$('#language-brazilian-portuguese').addClass("active-flag");
		$('#language-portuguese').removeClass("active-flag");
	});
	
	$('#language-portuguese').click();

})(jQuery);
