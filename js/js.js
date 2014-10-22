jQuery(document).ready(function($) {
	
	
	jQuery('.hamburger').on('click',  function(e) {
		e.preventDefault();
		$('body').toggleClass('side_active');
		$(this).toggleClass('active');
	});

});