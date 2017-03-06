$(document).ready(function() {

	$('#p1').click(function(){

		$('html, body').animate({
        scrollTop: $("#p1d").offset().top
    }, 1000);
	});


});