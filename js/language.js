(function($) {
  "use strict";
	
	$("#language-portuguese").click(function() {
		$('.pt').show();
		$('.br').hide();
		$('.en').hide();
		$('#language-portuguese').addClass("active-flag");
		$('#language-brazilian-portuguese').removeClass("active-flag");
		$('#language-english').removeClass("active-flag");
	});

	$("#language-brazilian-portuguese").click(function(){
		$('.pt').hide();
		$('.br').show();
		$('.en').hide();
		$('#language-portuguese').removeClass("active-flag");
		$('#language-brazilian-portuguese').addClass("active-flag");
		$('#language-english').removeClass("active-flag");
	});
	
	$("#language-english").click(function(){
		$('.pt').hide();
		$('.br').hide();
		$('.en').show();
		$('#language-portuguese').removeClass("active-flag");
		$('#language-brazilian-portuguese').removeClass("active-flag");
		$('#language-english').addClass("active-flag");
	});
	
	$('#language-portuguese').click();

})(jQuery);
